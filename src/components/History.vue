<template>
    <div
        class="mt-6 p-4 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg"
    >
        <h2 class="text-2xl font-semibold mb-4">Chat History</h2>
        <ul class="space-y-4">
            <li
                v-for="chat in chatHistory"
                :key="chat.timestamp"
                class="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
            >
                <strong
                    >{{ new Date(chat.timestamp).toLocaleString() }}:</strong
                >
                {{ chat.text }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const chatHistory = ref([]);
let db = null;

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
        fetchChatHistory();
    };
    request.onerror = (e) => {
        console.error("IndexedDB Error: ", e);
    };
}

function fetchChatHistory() {
    if (!db) return;
    const transaction = db.transaction("chats", "readonly");
    const store = transaction.objectStore("chats");
    const request = store.getAll();
    request.onsuccess = (e) => {
        // 按时间升序排序
        chatHistory.value = e.target.result.sort(
            (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
        );
    };
}

function handleChatRecordAdded() {
    fetchChatHistory();
}

onMounted(() => {
    openDB();
    window.addEventListener("chatRecordAdded", handleChatRecordAdded);
});

onBeforeUnmount(() => {
    window.removeEventListener("chatRecordAdded", handleChatRecordAdded);
});
</script>
