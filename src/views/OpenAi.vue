<template>
  <div>
    <input type="text" v-model="inputText" />
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
      this.outputText = await generateCode(this.inputText);

      // 先放入 eachRecords 
      this.eachRecords.question = this.inputText;
      this.eachRecords.response = this.outputText;
      // 後放入 records 
      this.records.push(this.eachRecords);
      this.eachRecords = {};
      console.log(this.records);
    },
  },
};
</script>
