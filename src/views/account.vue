<template>
  <div class="register-container">
    <h2>加入會員</h2>
    <form class="register-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">電子郵件</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">密碼</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">確認密碼</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>
      <button type="submit" class="btn btn-primary">註冊</button>
      <div class="g-signin2" data-onsuccess="onSignIn">456</div>
      <LoginButton :member-data="memberData" />
    </form>

  </div>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue'


export default {
  name: 'accountPage',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      memberData: {
        id: '425586517668-1esra6nu6o0sq64luqfv97iubmf6smi5.apps.googleusercontent.com',
        name: 'Web client  (auto created by Google Service)',
        email: 'newstarellie@gmail.com'
      }
    }
  },
  components: {
    LoginButton,
  },
  methods: {
    submitForm() {
      // 執行表單驗證
      if (this.password !== this.confirmPassword) {
        alert('兩次密碼輸入不相同')
        return
      }

      // 執行表單提交操作，例如呼叫 API 執行註冊
      // 可以使用 Vue Router 導向登入頁面，例如 this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  display: block;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.btn {
  display: block;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 18px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0062cc;
}
</style>
