<template>
  <div id="app">
    <header>
      <navbar></navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <!-- <footer>
      <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
    </footer> -->
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header {
  background-color: #f5f5f5;
  padding: 10px 0;
}

main {
  margin-right: 20px;
  width: 100%;
  align-self: flex-start;
  justify-self: start;
  height: 90%;
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
