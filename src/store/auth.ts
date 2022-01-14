import { defineStore } from 'pinia'
import { IUserInfo } from '@/api/interface'

export interface IAuthState {
	userInfo: IUserInfo
	isAuth: boolean
	code: string
}

export const useAuthStore = defineStore({
	id: 'auth',
	state: () =>
		({
			userInfo: {},
			isAuth: false,
			code: ''
		} as IAuthState),
	actions: {
		saveUserInfo(data: any) {
			this.$state.userInfo = data
		},
		setIsAuth(data) {
			this.$state.isAuth = data
		},
		setCode(code) {
			this.$state.code = code
		}
	},
	// 开启数据缓存
	persist: {
		key: 'auth',
		storage: window.localStorage,
		// paths: ['name'],
		overwrite: true
	}
})
