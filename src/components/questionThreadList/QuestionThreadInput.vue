<template>
  <div v-if="showInput">
    <input type="text" v-model="inputText">
    <button @click="updateQuestionThread(inputText, questionThread)">Done</button>
  </div>
</template>
<script>

export default {
  props: ['questionThread', 'showInput'],
  data() {
    return {
      inputText: '',
    }
  },
  methods: {
    updateQuestionThread(newTitle,
      oldTitle) {
      if (newTitle) {
        this.$emit('updateQuestionThread', oldTitle, newTitle);
      }
    },
  },
  created() {
    this.inputText = this.questionThread;
  }
}
</script>
