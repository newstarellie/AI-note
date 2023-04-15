<template>
  <div v-if="showInput" class="input-area">
    <input type="text" v-model="inputText">
    <i class="fas fa-check" :class="{ disabled: buttonDisabled }" :disabled="buttonValid"
      @click="updateQuestionThread(inputText, questionThread)"></i>
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
input {
  width: 80%;
}

.input-area {
  display: flex;
}
</style>