import { defineComponent, onMounted, reactive, ref } from 'vue'
import { fetchUserInfo } from '@/api/authController'
export default defineComponent({
  setup() {
    const data = ref({})
    const init = async () => {
      const resUseInfo = await fetchUserInfo()
      // console.log(resUseInfo.data);
      data.value = resUseInfo.data
      console.log(data.value)
    }
    onMounted(() => {
      init()
    })
    return () => {
      return <div class="test-mock-axios">{`${JSON.stringify(data.value)}`}</div>
    }
  }
})
