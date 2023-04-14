<template>
  <i class="fas fa-edit" @click="onClickEditButton"></i>
</template>

<script>
export default {
  props: {
    questionThread: String,
  },
  methods: {
    onClickEditButton() {
      this.$emit('edit-question-thread', this.questionThread);
    },
  },
}
</script>
