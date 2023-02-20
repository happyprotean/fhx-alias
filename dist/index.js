function alias() {
    return {
        name: 'fhx-alias',
        resolveId(source, importer) {
            console.log('alias - resolved => ', source, importer);
            return source;
        },
    };
}

export { alias };
