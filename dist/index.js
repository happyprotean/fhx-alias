import { addExtension } from '@rollup/pluginutils';

function normalizeEntries(entries) {
    if (Array.isArray(entries)) {
        return entries.map((entry) => new Entry(entry.find, entry.replacement));
    }
    else {
        return Object.keys(entries).map((key) => new Entry(key, entries[key]));
    }
}
class Entry {
    find;
    replacement;
    constructor(find, replacement) {
        this.find = find;
        this.replacement = replacement;
    }
    match(filePath) {
        return filePath.startsWith(this.find);
    }
    replace(filePath) {
        return filePath.replace(this.find, this.replacement);
    }
}
function alias(options) {
    const entries = normalizeEntries(options.entries);
    return {
        name: 'fhx-alias',
        resolveId(source, importer) {
            const matchEntry = entries.find((entry) => entry.match(source));
            if (!matchEntry)
                return source;
            return addExtension(matchEntry.replace(source));
        },
    };
}

export { alias as default };
