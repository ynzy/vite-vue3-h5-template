<script setup lang="ts">
import { getTimingData } from '@/api/mockData'
import { ref, onMounted } from 'vue'
import { useRequest } from 'vue-request'
const globalData = ref({})

const init = async () => {
  const { data: resultData, run } = useRequest(getTimingData, {
    pollingInterval: 5000,
    onSuccess: (data) => {
      console.log('onSuccess', data)
      globalData.value = data
    }
  })
  // await run()
  // console.log(resultData.value)
  // globalData.value = resultData.value

  // const res = await getTimingData()
  // data.value = res.data
  // const timer = setTimeout(() => {
  //   clearTimeout(timer)
  //   init()
  // }, 3000)
}
onMounted(() => {
  init()
})
</script>
<template>
  <div>
    <pre>{{ globalData }}</pre>
  </div>
</template>
<style lang="scss" scoped></style>
