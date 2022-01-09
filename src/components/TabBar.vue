<script setup lang="ts">
import { computed, PropType, ref, watch } from 'vue'

export interface ITabList {
  title: string // 标题
  to: { name: string } // url路径
  icon: string // 图标
}
const props = defineProps({
  tabbars: {
    type: Array as PropType<ITabList[]>,
    default: () => []
  },
  active: Number
})
const emit = defineEmits(['change'])
const active = computed({
  get: () => props.active,
  set: (val) => {
    emit('change', val)
  }
})
watch(active, (v) => {
  console.log('active', active.value)
})
// const test = ref(1)
</script>
<template>
  <!-- <van-tabbar v-model="test" route fixed>
    <van-tabbar-item v-for="(item, index) in tabbars" :to="item.to" :icon="item.icon" :key="index">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar> -->
  <van-tabbar route>
    <van-tabbar-item replace :to="{ name: 'Home' }" icon="home-o">标签1</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'Demo' }" icon="search">标签2</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'About' }" icon="search">标签3</van-tabbar-item>
  </van-tabbar>
  <van-tabbar route :fixed="false">
    <van-tabbar-item replace to="/home" icon="home-o">标签1</van-tabbar-item>
    <van-tabbar-item replace to="/demo" icon="search">标签2</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="search">标签3</van-tabbar-item>
  </van-tabbar>
</template>
<style lang="scss" scoped></style>
