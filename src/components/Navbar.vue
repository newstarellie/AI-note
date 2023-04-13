<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">OPEN AI</router-link>
      </li>
      <li>
        <router-link to="/loading">loadingI</router-link>
      </li>

      <!-- <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/cart">Cart</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/history">History</router-link>
      </li> -->
      <!-- 如果已經登入之後 log out  -->
      <!-- 沒有會員 sign in -->
      <!-- <li>
        <router-link to="/account">log in</router-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
/* 样式根据你的项目需求和设计进行调整 */

nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}

nav ul li a:hover {
  color: #007bff;
}
</style>