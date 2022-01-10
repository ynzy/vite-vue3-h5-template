<script setup lang="ts">
import { useRoute } from 'vue-router'
import TabBar, { ITabList } from '@/components/TabBar.vue'
import { reactive, watch, ref } from 'vue'
// 测试husky
const route = useRoute()
console.log(route.meta)
const tabbars: Array<ITabList> = reactive([
  { title: '首页', to: '/home', icon: 'home-o' },
  { title: '案例', to: '/demo', icon: 'star-o' },
  { title: '关于我', to: '/about', icon: 'user-o' }
])
const activeRoute = ref(0)
watch(activeRoute, (v) => {
  console.log('tab value v-model:', v)
})
const handleChange = (v: number) => {
  console.log('tab value @change:', v)
}
</script>
<template>
  <div class="layout-content">
    <keep-alive v-if="route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
  <div class="layout-footer" v-if="$route.meta.showTab">
    <TabBar :tabbars="tabbars" v-model="activeRoute" @change="handleChange" />
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
