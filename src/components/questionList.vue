<template>
  <ul class="questionList">
    <li :title="data.question" v-for="(data) in dataList" :key="data.createdTime">
      <a :href="`#${data.createdTime}`">{{ data.question }}</a>
    </li>
  </ul>
  <i title="刪除紀錄" class="fa fa-trash" aria-hidden="true" @click="clearThisRecord"></i>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'questionList',
  computed: {
    ...mapState("openAi", ["dataList"]),
  },
  methods: {
    clearThisRecord() {
      console.log('ji');
    },
  },
};
</script>

<style scoped lang="scss">
.questionList {
  // width: 20%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
}
</style>