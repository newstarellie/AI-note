<template>
  <div>
    <ul>
      <li v-for="(data, index) in dataList" :key="index">
        <a href="">{{ data.question }}</a>
        <p>{{ data.answer }}</p>
        <p>{{ data.createdTime }}</p>
      </li>
    </ul>
    <textarea id="mySection" style="width: 300px; height: 100px;" type="text" v-model="inputText"
      @keyup.ctrl.enter="generateCode" ref="myInput" />

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
  created() {
    this.$store.dispatch("openAi/getDataFromFirebase");
  },
};
</script>
