import { Plugin } from 'rollup'

interface AliasOptions {
  entries: {
    [key: string]: string
  }
}

export default function alias(options: AliasOptions): Plugin {
  const { entries } = options
  return {
    name: 'fhx-alias',
    resolveId(source: string, importer: string | undefined) {
      const matchKey = Object.keys(entries).find((key) => {
        return source.startsWith(key)
      })
      if (!matchKey) return source
      return source.replace(matchKey, entries[matchKey]) + '.js'
    },
  }
}
