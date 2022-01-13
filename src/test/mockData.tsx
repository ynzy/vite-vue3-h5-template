import { defineComponent, onMounted, reactive, ref } from 'vue'
import { fetchUserInfo } from '@/api/authController'
import { useRequest } from 'vue-request'

export default defineComponent({
  setup() {
    const globalRes = ref<any>(null)
    const init = async () => {
      // const resUseInfo = await fetchUserInfo()
      // // console.log(resUseInfo.data);
      // globalRes.value = resUseInfo.data
      // console.log(globalRes.value)

      const { data: res, run } = useRequest(fetchUserInfo)
      // 如果请求未完成，data为undefined。 使用 run 等待请求完成
      await run()
      console.log(res.value?.data)
      globalRes.value = res.value?.data
    }
    onMounted(() => {
      init()
    })
    return () => {
      return (
        <div class="test-mock-axios">
          <div>{`${JSON.stringify(globalRes.value)}`}</div>
        </div>
      )
    }
  }
})
