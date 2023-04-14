<template>
  <aside class="questionThread">
    <ul v-for="questionThread in questionThreadList" :key="questionThread">
      <li @click="setCurrentQuestionThread(questionThread)">{{ questionThread }}</li>
    </ul>
  </aside>
</template>
<script>

export default {
  name: 'questionThreadList',
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