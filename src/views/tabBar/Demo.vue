<script setup lang="ts"></script>
<template>
  <div class="layout-tabbar">
    <router-link to="/">首页</router-link>
    <router-link to="/tsx">测试tsx</router-link>
    <router-link to="/static">测试静态资源</router-link>
    <router-link to="/cssModel">测试css-model</router-link>
    <router-link to="/mockAxios">测试mock-axios</router-link>
    <router-link to="/testTimingData">定时请求数据</router-link>
    <router-link to="/pinia">测试pinia</router-link>
  </div>
</template>
<style lang="scss" scoped>
.layout-tabbar {
  display: flex;
  flex-wrap: wrap;
  a {
    display: inline-block;
    font-size: 14px;
    margin: 10px;
    padding: 5px;
    color: #000;
    background: rgb(0, 225, 255);
    box-sizing: border-box;
  }
}
</style>
