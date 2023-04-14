<template>
  <div>
    {{ questionThread }}
    <ul>
      <li :id="data.createdTime" v-for="(data, index) in dataList" :key="index">
        <p class="question" v-html="data.question"></p>
        <p v-html="data.answer"></p>
        <p v-html="data.createdTime"></p>
      </li>
    </ul>
    <questionThreadList />
    <questionList />

    <textarea class="inputArea" type="text" v-model="inputText" @keyup.ctrl.enter="generateCode" ref="myInput" />
    <button @click="generateCode">send</button>
  </div>
</template>

<script>
import generateCode from '@/api';
import { DateTime } from 'luxon';
import { mapState } from "vuex";
import questionThreadList from '../components/questionThreadList.vue'
import questionList from '../components/questionList.vue'


export default {
  name: 'MyComponent',
  props: ['questionThread'],
  components: {
    questionThreadList,
    questionList,
  },
  data() {
    return {
      inputText: '',
      outputText: '',
      records: [],
      eachRecords: {
        question: '',
        response: '',
      }
    };
  },
  computed: {
    ...mapState("openAi", ["dataList"]),

  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.myInput.focus();
    });

  },
  updated() {
    this.scrollToBottom();
  },
  methods: {

    async generateCode() {
      this.$router.push('/loading');
      this.outputText = await generateCode(this.inputText);
      this.$router.push('/');
      this.writeDataToFirebase(this.inputText, this.outputText);
      this.inputText = '';

      // 先放入 eachRecords 
      this.eachRecords.question = this.inputText;
      this.eachRecords.response = this.outputText;
      // 後放入 records 
      this.records.push(this.eachRecords);
      this.eachRecords = {};
      console.log(this.records);
    },
    writeDataToFirebase(question, answer) {
      console.log(question, answer);
      question = question.replace(/\n/g, "<br/>");
      answer = answer.replace(/\n/g, "<br/>");
      // 如果是新建立的questionThread  

      this.$store.dispatch('openAi/writeDataToFirebase', {
        questionThread: this.questionThread,
        createdTime: DateTime.now().toFormat('yyyy-MM-dd-HH:mm:ss'),
        payload: {
          createdTime: DateTime.now().toFormat('yyyy-MM-dd-HH:mm:ss'),
          question: question,
          answer: answer
        }
      });
    },
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