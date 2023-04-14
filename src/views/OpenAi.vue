<template>
  <div>
    <questionThreadList />
    <questionList :dataList="dataList" />
    <questionInputArea />
    <questionsRecordList :dataList="dataList" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import questionThreadList from '../components/questionThreadList.vue'
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
.question {
  border: 1px solid black;
}

.inputArea {
  width: 80%;
  height: 100px;
  padding: 10px;
  margin: 20px;
}
</style>