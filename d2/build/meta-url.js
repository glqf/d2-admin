const path = require('path')

// Set import.meta.url as the file path at build timed
// https://www.rollupjs.com/guide/plugin-development
// https://github.com/vitejs/vite/issues/4646

const MetaUrl = () => ({
  name: 'MetaUrl',
  resolveImportMeta: (property, { moduleId }) => {
    if (property === 'url') {
      return `'${path.relative(process.cwd(), moduleId)}'`
    }
  }
})

module.exports = MetaUrl
