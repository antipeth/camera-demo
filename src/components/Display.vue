<template>
    <div class="mt-4 p-2 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
        <textarea
            id="textArea"
            v-model="text"
            class="w-full h-55 p-4 text-black dark:bg-gray-700 dark:text-white rounded-md border-none resize-none"
            readonly></textarea>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from "vue";

    const text = ref("test");

    // 监听全局事件更新文本内容
    const updateText = (event) => {
        text.value = event.detail;
    };

    onMounted(() => {
        window.addEventListener("newChatMessage", updateText);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("newChatMessage", updateText);
    });
</script>
