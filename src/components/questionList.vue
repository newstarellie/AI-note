<template>
  <aside class="questionList">
    <ul>
      <li :title="data.question" v-for="(data) in dataList" :key="data.createdTime">
        <a :href="`#${data.createdTime}`">{{ data.question }}</a>
      </li>
    </ul>
    <i title="刪除紀錄" class="fa fa-trash" aria-hidden="true" @click="clearThisRecord"></i>

  </aside>
</template>

<script>

export default {
  name: 'questionList',
};
</script>

<style scoped>
/* 样式根据你的项目需求和设计进行调整 */

nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}

nav ul li a:hover {
  color: #007bff;
}
</style>