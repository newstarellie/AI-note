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
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

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
  background-color: #f5f5f5;
  text-align: center;
}

i {
  font-size: 30px;

  &:hover {
    color: gray;
  }
}
</style>
