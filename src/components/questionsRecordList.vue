<template>
  <ul class="questionsRecordList">
    <li :title="data.question" v-for="(data) in dataList" :key="data.createdTime">
      <a :href="`#${data.createdTime}`">{{ data.question }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'questionsRecordList',
  props: ['dataList'],
  methods: {
    clearThisRecord() {
      console.log('ji');
    },
  },
};
</script>

<style scoped lang="scss"></style>