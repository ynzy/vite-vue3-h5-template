/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
import styleImport, { VantResolve } from 'vite-plugin-style-import'

export function configStyleImportPlugin(isBuild: boolean) {
	return styleImport({
		resolves: [VantResolve()]
	})
}
