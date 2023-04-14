<template>
  <ul class="questionThread" v-for="questionThread in questionThreadList" :key="questionThread">
    <li>
      <a @click="setCurrentQuestionThread(questionThread)">{{ questionThread }}</a>
      <div class="buttonList">

        <i title="刪除紀錄" class="fa fa-trash" aria-hidden="true" @click="deleteThisQuestionThread(questionThread)"></i>
      </div>
    </li>
  </ul>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: 'questionThreadList',
  computed: {
    ...mapState("openAi", ["questionThreadList"]),
  },
  methods: {
    setCurrentQuestionThread(questionThread) {
      this.currentQuestionThread = questionThread;
      this.$store.dispatch("openAi/getDataFromFirebase", this.currentQuestionThread);
    },
    deleteThisQuestionThread(questionThread) {
      console.log(questionThread)
      this.$store.dispatch("openAi/deleteThisQuestionThread", questionThread);

    },
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
.questionThread {
  top: 20px;
  left: 20px;
  background-color: white;
  position: relative;
}

.buttonList {
  position: absolute;
  right: 0;
  top: 0px;

  i {

    font-size: 30px;

    &:hover {
      color: gray;
      cursor: pointer;
    }
  }
}
</style>