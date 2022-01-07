import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      config: 'app'
    }
  },
  actions: {
    setData(data: any) {
      console.log(data)
      this.config = data
    }
  }
})
