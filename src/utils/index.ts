import { loadConfig } from '@/config'

/**
 * 动态设置浏览器标题
 * @param title
 */
export const setDocumentTitle = async (title?: string) => {
  const config = await loadConfig()
  document.title = title || config.title
}
