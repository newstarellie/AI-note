<template>
  <div v-if="showInput">
    <input type="text" :value="questionThread" @input="inputText = $event.target.value">
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
      this.$emit('update', newTitle, oldTitle);
    },
  },
}
</script>
