import { defineStore } from 'pinia'

export interface ILinkState {
	initLink: string
}

export const useLinkStore = defineStore({
	id: 'auth',
	state: () =>
		({
			initLink: ''
		} as ILinkState),
	actions: {
		setInitLink(data: any) {
			this.$state.initLink = data
		}
	},
	// 开启数据缓存
	persist: {
		key: 'link',
		storage: window.localStorage,
		// paths: ['name'],
		overwrite: true
	}
})
