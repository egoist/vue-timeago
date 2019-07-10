const marked = require('marked')
require('prismjs')
require('prismjs/components/prism-javascript')

module.exports = function (source) {
  const html = marked(source, {
    highlight(str, lang) {
      return Prism.highlight(str, Prism.languages[lang] || Prism.languages.markup)
    }
  })

  return `export default ${JSON.stringify(html)}`
}
