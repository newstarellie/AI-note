<template>
    <div class="contact">
        <h1>聯絡我們</h1>
        <p>如果您有任何問題，歡迎透過以下方式與我們聯繫。</p>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">姓名：</label>
                <input type="text" id="name" v-model="form.name" />
            </div>
            <div class="form-group">
                <label for="email">電子郵件：</label>
                <input type="email" id="email" v-model="form.email" />
            </div>
            <div class="form-group">
                <label for="message">訊息：</label>
                <textarea id="message" v-model="form.message"></textarea>
            </div>
            <button type="submit">提交</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
            },
        };
    },
    methods: {
        submitForm() {
            // 在這裡處理表單提交的邏輯，例如檢查輸入是否有效，然後發送給後端
            console.log('提交表單', this.form);
        },
    },
};
</script>

<style scoped>
.contact {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
}

button:hover {
    background-color: #0056b3;
}
</style>
