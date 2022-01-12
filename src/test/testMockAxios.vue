<script setup lang="ts">
// import { defineComponent, onMounted, reactive, ref } from 'vue'
// import { fetchUserInfo } from '@/api/authController'
import mockData from './mockData'
// const data = ref({})
// const init = async () => {
//   const resUseInfo = await fetchUserInfo()
//   // console.log(resUseInfo.data);
//   data.value = resUseInfo.data
//   console.log(data.value)
// }
// onMounted(() => {
//   init()
// })
</script>
<template>
  <div>
    <mockData />
    <!-- {{ data }} -->
  </div>
</template>
<style lang="scss" scoped></style>
