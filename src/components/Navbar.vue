<template>
  <nav>
    <ul class="buttonList">
      <li>
        <i class="fas fa-trash" title="垃圾桶"></i>
      </li>
      <li>
        <i class="fas fa-eraser" title="清除全部"></i>
      </li>
      <li>
        <i class="fas fa-plus" title="newChat"></i>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/">OPEN AI</router-link>
      </li>
    </ul>
    <div></div>
  </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
/* 样式根据你的项目需求和设计进行调整 */
nav {
  display: flex;
  justify-content: space-between;
}

ul {
  display: flex;
}
</style>