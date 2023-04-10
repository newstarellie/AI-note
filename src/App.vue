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
import generateCode from '@/api';


export default {
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    async generate() {
      this.generatedCode = await generateCode(this.prompt);
    }
  },
  created() {
    this.generate();
  },
};
</script>

<style scoped>
/* 样式根据你的项目需求和设计进行调整 */
header {
  background-color: #f5f5f5;
  padding: 10px 0;
}

main {
  padding: 20px;
}

footer {
  background-color: #f5f5f5
}
</style>