<template>
  <ul>
    <li :id="data.createdTime" v-for="(data, index) in dataList" :key="index">
      <p class="question" v-html="data.question"></p>
      <p v-html="data.answer"></p>
      <p v-html="data.createdTime"></p>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'questionList',
  props: ['dataList']
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/variable.scss";

.question {
  background-color: $primary-background-color;
}
</style>