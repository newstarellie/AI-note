<template>
  <div>
    <input type="text" v-model="inputText" />
    <button @click="generateCode">Generate Code</button>
    <div v-if="outputText">{{ outputText }}</div>
  </div>
</template>

<script>
// import generateCode from '@/api';

export default {
  name: 'MyComponent',
  data() {
    return {
      inputText: '',
      outputText: ''
    };
  },
  methods: {
    // async generateCode() {
    //   const data = {
    //     "model": "gpt-3.5-turbo",
    //     "messages": [{ "role": "user", "content": this.inputText }],
    //     "temperature": 0.7
    //   };
    //   try {
    //     const result = await generateCode(data);
    //     this.outputText = result;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }
};
</script>
