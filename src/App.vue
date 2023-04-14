<template>
  <div id="app">
    <header>
      <navbar></navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="scss">
/* 样式根据你的项目需求和设计进行调整 */
header {
  background-color: #f5f5f5;
  padding: 10px 0;
}

main {
  flex: 1;
  margin-right: 20px;
  width: 80%;
}

footer {
  background-color: #f5f5f5
}

i {
  font-size: 30px;

  &:hover {
    color: gray;
  }
}
</style>
