import { setDocumentTitle } from '@/utils'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { routes } from './router.config'
import { getQueryParams, phoneModel, isWeChat } from '@/utils'
import { useAuthStore } from '@/store/auth'
import { useLinkStore } from '@/store/link'
import { fetchWeChatAuth } from '@/api/WxController'

const authStore = useAuthStore()
const linkStore = useLinkStore()
interface IQueryParams {
	code?: string
}
const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from, next) => {
	setDocumentTitle(to.meta.title as string)
	//! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
	if (window.entryUrl === undefined) {
		window.entryUrl = location.href.split('#')[0]
	}
	const { code } = getQueryParams<IQueryParams>()
	// 微信浏览器内微信授权登陆
	// && !store.state.auth.userInfo.name
	if (isWeChat()) {
		if (code) {
			// store.commit('auth/STE_ISAUTH', true)
			// store.commit('auth/STE_CODE', code)
			authStore.setIsAuth(true)
			authStore.setCode(code)
		}
		if (!authStore.isAuth) {
			location.href = fetchWeChatAuth()
		}
	}
	next()
})

router.afterEach((to, from, next) => {
	let url
	if (phoneModel() === 'ios') {
		url = window.entryUrl
	} else {
		url = window.location.href
	}
	// 保存url
	// store.commit('link/SET_INIT_LINK', url)
	linkStore.setInitLink(url)
})

export default router
