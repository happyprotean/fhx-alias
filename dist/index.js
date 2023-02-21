function alias(options) {
    const { entries } = options;
    return {
        name: 'fhx-alias',
        resolveId(source, importer) {
            console.log('alias - resolved => ', source, importer);
            const matchKey = Object.keys(entries).find((key) => {
                return source.startsWith(key);
            });
            if (!matchKey)
                return source;
            return source.replace(matchKey, entries[matchKey]) + '.js';
        },
    };
}

export { alias as default };
