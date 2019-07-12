module.exports = source => {
  return `export default function (Component) {
    Component.options.$readme = ${JSON.stringify(source.trim())}
  }`
}
