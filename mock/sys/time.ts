import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util'

export default [
	{
		url: '/getTimingData',
		method: 'get',
		response: (request: requestParams) => {
			return resultSuccess({
				nickname: '@cname',
				age: '@integer(10-100)',
				uid: '@id',
				url: '@image',
				city: '@city',
				country: '@county(true)',
				province: '@province',
				mobile_phone: '@phone',
				email: '@email',
				region: '@region'
			})
		}
	}
] as MockMethod[]
