<template>
  <i title="刪除紀錄" class="fa fa-trash" aria-hidden="true" @click="$emit('click', questionThread)"></i>
</template>

<script>
export default {
  props: {
    questionThread: String,
  },
}
</script>
