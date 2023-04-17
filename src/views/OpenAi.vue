<template>
  <div class="container">
    <questionThreadList class="questionThreadList" />
    <div class="content">
      <questionList :dataList="dataList" v-if="!newPageStatus" />
      <div></div>
      <questionInputArea class="questionInputArea" />
    </div>
    <questionsRecordList :dataList="dataList" class="questionsRecordList" v-if="!newPageStatus" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import questionThreadList from '../components/questionThreadList/questionThreadList.vue'
import questionsRecordList from '../components/questionsRecordList.vue'
import questionList from '../components/questionList.vue'
import questionInputArea from '../components/questionInputArea.vue'


export default {
  name: 'MyComponent',
  components: {
    questionThreadList,
    questionsRecordList,
    questionList,
    questionInputArea,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState("openAi", ["dataList"]),
    ...mapState("openAi", ["currentQuestionThread"]),
    ...mapGetters("openAi", ["newPageStatus"])

  },
  updated() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.questionThreadList {
  width: 20%;
  height: 100vh;
  min-width: 200px;
}

.content {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .questionInputArea {
    width: 100%;
    margin: 20px 0;
  }
}

.questionsRecordList {
  width: 20%;
}
</style>