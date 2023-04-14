<template>
  <div>
    <textarea class="inputArea" type="text" v-model="inputText" @keyup.ctrl.enter="generateCode" ref="myInput" />
    <button @click="generateCode">send</button>
  </div>
</template>

<script>
import generateCode from '@/api';
import { DateTime } from 'luxon';
import { mapState } from "vuex";


export default {
  name: 'questionList',
  // props: ['questionThread'],
  data() {
    return {
      inputText: '',
      outputText: '',
      currentTime: DateTime.now().toFormat('yyyy-MM-dd-HH:mm:ss'),
    };
  },
  computed: {
    // currentQuestionThread 
    ...mapState("openAi", ["currentQuestionThread"]),

  },
  methods: {
    async generateCode() {
      this.$router.push('/loading');
      this.outputText = await generateCode(this.inputText);
      if (this.outputText) {
        this.$router.push('/');
        this.writeDataToFirebase(this.inputText, this.outputText);
      }
      this.inputText = '';
    },
    writeDataToFirebase(question, answer) {
      this.$store.dispatch('openAi/writeDataToFirebase', {
        questionThread: this.currentQuestionThread !== 'CreateNewChat' ? this.currentQuestionThread : this.currentTime,
        createdTime: this.currentTime,
        payload: {
          createdTime: this.currentTime,
          question: this.stringFormat(question),
          answer: this.stringFormat(answer),
        }
      });
    },
    stringFormat(str) {
      return str.replace(/\n/g, "<br/>");
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.myInput.focus();
    });
  },
  updated() {
    // todo 頁面標籤沒有跟著改 
    this.$store.dispatch("openAi/getDataFromFirebase", this.currentQuestionThread);
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