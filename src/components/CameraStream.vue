<template>
    <!-- 初始黑色背景，当摄像头未开启时 -->
    <div
        id="videoContainer"
        class="relative w-full h-72 bg-black rounded-lg overflow-hidden"
    >
        <!-- 摄像头预览 video 元素 -->
        <video
            ref="videoElement"
            class="w-full h-auto max-w-full object-cover rounded-lg"
            autoplay
            playsinline
            style="display: none; border-radius: 8px"
        ></video>
        <!-- 摄像头开关按钮 -->
        <button
            type="button"
            @click="toggleStreaming"
            class="absolute top-3 right-3 px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center me-2 mb-2"
        >
            <!-- 播放图标 -->
            <svg
                v-if="!isStreaming"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3l14 9-14 9V3z"
                ></path>
            </svg>
            <!-- 暂停图标 -->
            <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 19V5h4v14H6zm8 0V5h4v14h-4z"
                ></path>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const videoElement = ref(null);
const isStreaming = ref(false);
let stream = null;
let mediaRecorder = null;
let hasFetchedText = false;

// URL 配置
let STREAM_URL = "https://backend.com";
let VIDEO_URL = `${STREAM_URL}/api/video`;
let TEXT_URL = `${STREAM_URL}/api/text`;

onMounted(() => {
    // 仅在客户端获取 localStorage 的值
    if (typeof window !== "undefined") {
        STREAM_URL =
            localStorage.getItem("backendURL") || "https://backend.com";
        VIDEO_URL = `${STREAM_URL}/api/video`;
        TEXT_URL = `${STREAM_URL}/api/text`;
    }
    // 初始化 IndexedDB
    openDB();
});

/* ========== IndexedDB 逻辑 ========== */
let db = null;
let pendingMessages = [];

function openDB() {
    const request = window.indexedDB.open("chat-web-store", 1);
    request.onupgradeneeded = (e) => {
        db = e.target.result;
        if (!db.objectStoreNames.contains("chats")) {
            const store = db.createObjectStore("chats", {
                keyPath: "timestamp",
            });
            store.createIndex("timestamp", "timestamp", { unique: true });
        }
    };
    request.onsuccess = (e) => {
        db = e.target.result;
        // 如果有缓存的消息，则写入数据库
        if (pendingMessages.length) {
            pendingMessages.forEach((msg) => addChatRecord(msg));
            pendingMessages = [];
        }
    };
    request.onerror = (e) => {
        console.error("IndexedDB Error: ", e);
    };
}

function addChatRecord(text) {
    if (!db) {
        pendingMessages.push(text);
        return;
    }
    const timestamp = new Date().toISOString();
    const chat = { timestamp, text };
    const transaction = db.transaction("chats", "readwrite");
    const store = transaction.objectStore("chats");
    const request = store.put(chat);
    request.onsuccess = () => {
        console.log("Chat added!");
        // 通知 History.vue 刷新
        window.dispatchEvent(new CustomEvent("chatRecordAdded"));
    };
    request.onerror = (e) => {
        console.error("Error adding chat record:", e);
    };
}
/* ========== IndexedDB 逻辑 END ========== */

// 启动摄像头并开始推流，同时显示视频预览
const startStreaming = async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoElement.value) {
            videoElement.value.srcObject = stream;
            videoElement.value.style.display = "block";
        }
        isStreaming.value = true;
        // 初始化 MediaRecorder，向后端发送视频流
        mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
        mediaRecorder.ondataavailable = async (event) => {
            if (event.data.size > 0) {
                const formData = new FormData();
                formData.append("video", event.data);
                await fetch(VIDEO_URL, {
                    method: "POST",
                    body: formData,
                });
            }
        };
        mediaRecorder.start(1000); // 每1秒发送一次数据
    } catch (err) {
        console.error("无法访问摄像头:", err);
    }
};

// 停止摄像头、结束推流，并开始拉取后端文字内容
const stopStreaming = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
    }
    if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        stream = null;
    }
    if (videoElement.value) {
        videoElement.value.style.display = "none";
    }
    isStreaming.value = false;
    hasFetchedText = false;
    fetchText();
};

// 获取后端文字内容，并写入 IndexedDB
const fetchText = async () => {
    if (hasFetchedText) return;
    let timeoutReached = false;
    const timeout = setTimeout(() => {
        timeoutReached = true;
        // 超时后通知 Display 组件
        window.dispatchEvent(
            new CustomEvent("newChatMessage", {
                detail: "Error: Unable to fetch text within 20 seconds.",
            }),
        );
    }, 20000);

    const interval = setInterval(async () => {
        try {
            const response = await fetch(TEXT_URL);
            if (response.ok) {
                const data = await response.text();
                console.log("Fetched text:", data);
                // 先派发事件给 Display 组件（用于展示）
                window.dispatchEvent(
                    new CustomEvent("newChatMessage", { detail: data }),
                );
                // 同时写入 IndexedDB
                addChatRecord(data);
                hasFetchedText = true;
                clearTimeout(timeout);
                clearInterval(interval);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
        if (timeoutReached) {
            clearInterval(interval);
        }
    }, 4000);
};

const toggleStreaming = () => {
    if (isStreaming.value) {
        stopStreaming();
    } else {
        startStreaming();
    }
};
</script>
