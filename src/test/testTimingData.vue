<script setup lang="ts">
import { getTimingData } from '@/api/mockData'
import { ref, onMounted } from 'vue'
const data = ref({})

const init = async () => {
  const res = await getTimingData()
  data.value = res.data
  const timer = setTimeout(() => {
    clearTimeout(timer)
    init()
  }, 3000)
}
onMounted(() => {
  init()
})
</script>
<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
<style lang="scss" scoped></style>
