<template>
  <ul class="questionsRecordList">
    <li :title="data.question" v-for="(data) in dataList" :key="data.createdTime">
      <a :href="`#${data.createdTime}`">{{ data.question }}</a>
    </li>
  </ul>
  <i title="刪除紀錄" class="fa fa-trash" aria-hidden="true" @click="clearThisRecord"></i>
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

<style scoped lang="scss">
.questionsRecordList {
  // width: 20%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
}
</style>