<template>
  <div id="app">
    <header>
      <navbar></navbar>
    </header>
    <aside class="questionThread">
      <ul v-for="questionThread in questionThreadList" :key="questionThread">
        <li @click="setCurrentQuestionThread(questionThread)">{{ questionThread }}</li>
      </ul>
    </aside>
    <main>
      <router-view :questionThread="currentQuestionThread"></router-view>
    </main>
    <aside class="questionList">
      <ul>
        <li :title="data.question" v-for="(data) in dataList" :key="data.createdTime">
          <a :href="`#${data.createdTime}`">{{ data.question }}</a>
        </li>
      </ul>
      <i title="刪除紀錄" class="fa fa-trash" aria-hidden="true" @click="clearThisRecord"></i>

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
  data() {
    return {
      currentQuestionThread: '',
    }
  },
  computed: {
    ...mapState("openAi", ["dataList"]),
    ...mapState("openAi", ["questionThreadList"]),

  },
  methods: {
    clearThisRecord() {
      console.log('ji');
    },
    setCurrentQuestionThread(questionThread) {
      this.currentQuestionThread = questionThread;
      this.$store.dispatch("openAi/getDataFromFirebase", this.currentQuestionThread);
    }
  },
  created() {
    this.$store.dispatch("openAi/getQuestionThreadList");
  }
};
</script>

<style scoped lang="scss">
/* 样式根据你的项目需求和设计进行调整 */
header {
  background-color: #f5f5f5;
  padding: 10px 0;
}

.questionThread {
  width: 20%;
  // position: fixed;
  top: 20px;
  left: 20px;
  background-color: white;
}

.questionList {
  width: 20%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
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
