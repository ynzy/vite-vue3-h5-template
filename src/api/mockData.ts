import request from '@/utils/request'
/**
 * 获取模拟数据
 */

export const getTimingData = () => {
  return request({
    url: '/getTimingData',
    method: 'GET'
  })
}
