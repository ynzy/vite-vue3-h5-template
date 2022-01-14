import { defineStore } from 'pinia'
import { useAppStore } from './app'

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		name: '张三',
		age: 18
	}),
	getters: {
		fullName: (state) => state.name + '丰'
	},
	actions: {
		updateState(data: any) {
			this.$state = data
			this.updateAppConfig()
		},
		updateAppConfig() {
			const appStore = useAppStore()
			appStore.setData('app-update')
		}
	},
	// 开启数据缓存
	persist: {
		key: 'user',
		storage: window.localStorage,
		paths: ['name'],
		overwrite: true
	}
})
