<template>
  <input type="text" :value="questionThread" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    questionThread: String,
  },
}
</script>
