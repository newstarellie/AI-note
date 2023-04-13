<template>
  <div>
    <ul>
      <li :id="data.createdTime" v-for="(data, index) in dataList" :key="index">
        <p class="question" v-html="data.question"></p>
        <p v-html="data.answer"></p>
        <p v-html="data.createdTime"></p>
      </li>
    </ul>
    <textarea class="inputArea" type="text" v-model="inputText" @keyup.ctrl.enter="generateCode" ref="myInput" />

    <button @click="generateCode">send</button>
  </div>
</template>

<script>
import generateCode from '@/api';
import { DateTime } from 'luxon';
import { mapState } from "vuex";


export default {
  name: 'MyComponent',
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
      this.save(this.inputText, this.outputText);
      this.inputText = '';

      // 先放入 eachRecords 
      this.eachRecords.question = this.inputText;
      this.eachRecords.response = this.outputText;
      // 後放入 records 
      this.records.push(this.eachRecords);
      this.eachRecords = {};
      console.log(this.records);
    },
    save(question, answer) {
      console.log(question, answer);
      question = question.replace(/\n/g, "<br/>");
      answer = answer.replace(/\n/g, "<br/>");


      this.$store.dispatch('openAi/writeDataToFirebase', {
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