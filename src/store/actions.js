// src/store/modules/actions.js
export default {
    // 一個通用的 action，可用於獲取遠端 API 數據
    async fetchResource({ commit }, { resource, mutation }) {
        try {
            const response = await fetch(resource);
            const data = await response.json();

            commit(mutation, data);
        } catch (error) {
            console.error('Error fetching resource:', error);
        }
    },

    // 在此添加其他通用 actions
};
