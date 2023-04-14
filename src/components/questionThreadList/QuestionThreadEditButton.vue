<template>
  <i class="fas fa-edit" @click="$emit('click', questionThread)"></i>
</template>

<script>
export default {
  props: {
    questionThread: String,
  },
}
</script>
