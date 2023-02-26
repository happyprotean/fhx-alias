import { Plugin } from 'rollup'
// import { addExtension } from '@rollup/pluginutils'

interface Entries {
  [key: string]: string
}

interface AliasOptions {
  entries: Entries | { find: string | RegExp; replacement: string }[]
}

function normalizeEntries(entries: AliasOptions['entries']) {
  if (Array.isArray(entries)) {
    return entries.map((entry) => new Entry(entry.find, entry.replacement))
  } else {
    return Object.keys(entries).map((key) => new Entry(key, entries[key]))
  }
}

class Entry {
  constructor(private find: string | RegExp, private replacement: string) {}

  match(filePath: string): Boolean {
    if (typeof this.find === 'string') {
      return filePath.startsWith(this.find)
    } else {
      return this.find.test(filePath)
    }
  }

  replace(filePath: string): string {
    return filePath.replace(this.find, this.replacement)
  }
}

export default function alias(options: AliasOptions): Plugin {
  const entries = normalizeEntries(options.entries)
  return {
    name: 'fhx-alias',
    async resolveId(source: string, importer: string | undefined) {
      const matchEntry = entries.find((entry) => entry.match(source))
      if (!matchEntry) return source
      const resolution = await this.resolve(matchEntry.replace(source), importer, {
        skipSelf: true,
      })
      return resolution?.id 
    },
  }
}
