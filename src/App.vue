<template>
  <div id="app">
    <header>
      <navbar></navbar>
    </header>

    <main>
      <router-view></router-view>
    </main>
    <aside>
      <ul>
        <li class="questionList" v-for="(data) in dataList" :key="data.createdTime">
          <a :href="`#${data.createdTime}`">{{ data.question.slice(0, 20) }}</a>
        </li>
      </ul>
    </aside>

    <footer>
      <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapState } from "vuex";


export default {
  name: 'App',
  components: {
    Navbar,
  },
  computed: {
    ...mapState("openAi", ["dataList"]),

  },
};
</script>

<style scoped lang="scss">
/* 样式根据你的项目需求和设计进行调整 */
header {
  background-color: #f5f5f5;
  padding: 10px 0;
}



aside {
  width: 20%;

  position: fixed;
  bottom: 20px;
  right: 20px;

}

main {
  flex: 1;
  margin-right: 20px;
  width: 80%;
}

footer {
  background-color: #f5f5f5
}
</style>