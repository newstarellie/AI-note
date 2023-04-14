<template>
  <div>
    <textarea class="inputArea" type="text" v-model="inputText" @keyup.ctrl.enter="generateCode" ref="myInput" />
    <button @click="generateCode">send</button>
  </div>
</template>

<script>
import generateCode from '@/api';
import { DateTime } from 'luxon';
import { mapState, mapGetters } from "vuex";


export default {
  name: 'questionList',
  data() {
    return {
      inputText: '',
      outputText: '',
      currentTime: DateTime.now().toFormat('yyyy-MM-dd-HH:mm:ss'),
    };
  },
  computed: {
    ...mapState("openAi", ["currentQuestionThread"]),
    ...mapGetters("openAi", ["newPageStatus"]),

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
        questionThread: this.newPageStatus ? this.currentTime : this.currentQuestionThread,
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
    if (this.currentQuestionThread) {
      this.$store.dispatch("openAi/getDataFromFirebase", this.currentQuestionThread);
    }
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