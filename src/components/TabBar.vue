<script setup lang="ts">
import { computed, PropType } from 'vue'

export interface ITabList {
  title: string // 标题
  to: string // url路径
  icon: string // 图标
}
const props = defineProps({
  tabbars: {
    type: Array as PropType<ITabList[]>,
    default: () => []
  },
  active: Number
})
const emit = defineEmits(['change', 'update:active'])
const active = computed({
  get: () => props.active,
  set: (val) => {
    emit('update:active', val)
    emit('change', val)
  }
})
</script>
<template>
  <van-tabbar v-model="active" route fixed>
    <van-tabbar-item v-for="(item, index) in tabbars" :to="item.to" :icon="item.icon" :key="index">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>
