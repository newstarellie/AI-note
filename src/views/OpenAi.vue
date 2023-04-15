<template>
  <div class="container">
    <questionThreadList class="questionThreadList" />
    <div class="content">
      <questionList :dataList="dataList" v-if="!newPageStatus" />
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
<style>
.container {
  display: flex;
  justify-content: space-between;
  width: 100vw;
}

.questionThreadList {
  width: 20%;
}

.content {
  width: 60%;
  /* height: 100px;
  padding: 10px;
  margin: 20px; */
}

.questionsRecordList {
  width: 20%;
}
</style>