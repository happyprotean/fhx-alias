import { Plugin } from 'rollup'

export function alias(): Plugin {
  return {
    name: 'fhx-alias',
    resolveId(source: string, importer: string | undefined) {
      console.log('alias - resolved => ', source, importer)
      return source
    },
  }
}
