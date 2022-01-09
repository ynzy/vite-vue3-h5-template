<script setup lang="ts">
import { useRoute } from 'vue-router'
import TabBar, { ITabList } from '@/components/TabBar.vue'
import { reactive, computed, watch } from 'vue'
interface ILayoutState {
  tabbars: Array<ITabList>
  defaultActive: number
}

const route = useRoute()
console.log(route.meta)
const tabbars: Array<ITabList> = reactive([
  { title: '首页', to: { name: 'Home' }, icon: 'home-o' },
  { title: '案例', to: { name: 'Demo' }, icon: 'star-o' },
  { title: '关于我', to: { name: 'About' }, icon: 'user-o' }
])
const activeRoute = computed(() => {
  return tabbars.findIndex((item: ITabList) => {
    return item.to.name === route.name
  })
})
console.log(activeRoute)

watch(activeRoute, (v) => {
  console.log(v)
})
const handleChange = (v: number) => {
  console.log('tab value:', v)
}
</script>
<template>
  <!-- <div class="layout-tabbar">
    <router-link to="/">首页</router-link>
    <router-link to="/tsx">测试tsx</router-link>
    <router-link to="/static">测试静态资源</router-link>
    <router-link to="/cssModel">测试css-model</router-link>
    <router-link to="/mockAxios">测试mock-axios</router-link>
    <router-link to="/pinia">测试pinia</router-link>
  </div> -->
  <div class="layout-content">
    <keep-alive v-if="route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
  <div class="layout-footer" v-if="$route.meta.showTab">
    <!-- 这里@change默认绑定在了van-tabbar上，参考vue的$attr -->
    <!-- <TabBar :tabbars="tabbars" :defaultActive="defaultActive" @change="handleChange" /> -->
    <TabBar :tabbars="tabbars" :active="activeRoute" @change="handleChange" />
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
