<template>
  <div>
    <input type="text" v-model="inputText" @keyup.enter="generateCode" />
    <button @click="generateCode">send</button>
    <ul>
      <li v-for="(record, index) in records" :key="index">
        <a href="">{{ record.question }}</a>
        <p>{{ record.response }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import generateCode from '@/api';
import { DateTime } from 'luxon';


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
        createdTime: DateTime.now().toFormat('yyyy-MM-dd HH:mm'),
        payload: {
          question: question,
          answer: answer
        }
      });
    }
  },
};
</script>
