/**
 *  Introduces component library styles on demand.
 * https://github.com/antfu/unplugin-vue-components
 */
import Components from 'unplugin-vue-components/vite'

export function configAutoComponentsPlugin() {
	return Components({
		// 指定组件位置，默认是src/components
		dirs: ['src/components'],
		// ui库解析器
		// resolvers: [ElementPlusResolver()],
		extensions: ['vue', 'tsx'],
		// 配置文件生成位置
		dts: 'src/components.d.ts',
		// 搜索子目录
		deep: true,
		// 允许子目录作为组件的命名空间前缀。
		directoryAsNamespace: false
		// include:[]
	})
}
