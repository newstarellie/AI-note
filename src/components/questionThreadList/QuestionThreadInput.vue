<template>
  <div v-if="showInput">
    <input type="text" v-model="inputText">
    <button :class="{ disabled: buttonDisabled }" :disabled="buttonValid"
      @click="updateQuestionThread(inputText, questionThread)">Done</button>
  </div>
</template>
<script>

export default {
  props: ['questionThread', 'showInput'],
  data() {
    return {
      inputText: '',
      buttonDisabled: false,
    }
  },
  watch: {
    inputText(newVal) {
      this.buttonDisabled = !newVal;
    }
  },
  methods: {
    updateQuestionThread(newTitle,
      oldTitle) {
      this.buttonDisabled = true;
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
<style scoped lang="scss">
.disabled {
  background-color: gray;
}
</style>