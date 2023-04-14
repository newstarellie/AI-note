<template>
  <div>
    <textarea class="inputArea" type="text" v-model="inputText" @keyup.ctrl.enter="generateCode" ref="myInput" />
    <button @click="generateCode">send</button>
  </div>
</template>

<script>
import generateCode from '@/api';
import { DateTime } from 'luxon';
export default {
  name: 'questionList',
  props: ['dataList'],
  data() {
    return {
      inputText: '',
      outputText: '',
    };
  },
  methods: {
    async generateCode() {
      this.$router.push('/loading');
      this.outputText = await generateCode(this.inputText);
      this.$router.push('/');
      this.writeDataToFirebase(this.inputText, this.outputText);
      this.inputText = '';
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
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.myInput.focus();
    });

  },
};
</script>

<style scoped lang="scss">
.inputArea {
  width: 80%;
  height: 100px;
  padding: 10px;
  margin: 20px;
}
</style>