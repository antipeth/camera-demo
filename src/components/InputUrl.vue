<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            设置后端 URL
        </h1>
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
                <label
                    for="backendURL"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your Backend Url
                </label>
                <input
                    type="url"
                    id="backendURL"
                    v-model="backendURL"
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="https://your-backend.com"
                />
            </div>
            <button
                type="submit"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                保存
            </button>
        </form>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";

    const backendURL = ref("");

    onMounted(() => {
        // 从 localStorage 获取之前保存的 URL
        const savedURL = localStorage.getItem("backendURL");
        if (savedURL) {
            backendURL.value = savedURL;
        }
    });

    const handleSubmit = () => {
        const trimmedURL = backendURL.value.trim();
        if (trimmedURL) {
            localStorage.setItem("backendURL", trimmedURL);
            alert("设置已保存！");
        } else {
            alert("请输入有效的 URL");
        }
    };
</script>
