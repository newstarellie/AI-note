<template>
  <ul class="questionThread" v-for="questionThread in questionThreadList" :key="questionThread">
    <li @click="setCurrentQuestionThread(questionThread)">{{ questionThread }}</li>
  </ul>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: 'questionThreadList',
  computed: {
    ...mapState("openAi", ["dataList"]),
    ...mapState("openAi", ["questionThreadList"]),

  },
  methods: {
    setCurrentQuestionThread(questionThread) {
      this.currentQuestionThread = questionThread;
      this.$store.dispatch("openAi/getDataFromFirebase", this.currentQuestionThread);
    }
  },
  updated() {
    // todo 頁面標籤沒有跟著改 
    document.title = this.currentQuestionThread || 'Create New Chat';
  },
  created() {
    this.$store.dispatch("openAi/getQuestionThreadList");
  }
};
</script>

<style scoped lang="scss">
/* 样式根据你的项目需求和设计进行调整 */

.questionThread {
  // width: 20%;
  // position: fixed;
  top: 20px;
  left: 20px;
  background-color: white;
}
</style>