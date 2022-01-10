import { config } from '@/config'

/**
 * 动态设置浏览器标题
 * @param title
 */
export const setDocumentTitle = (title?: string) => {
  document.title = title || config.title
}
