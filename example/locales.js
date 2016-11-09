function requireAll(requireContext) {
  const keys = requireContext.keys()
  return keys
    .reduce((current, next) => {
      current[next.substr(2, 5)] = requireContext(next)
      return current
    }, {})
}

const locales = requireAll(require.context("../locales", true, /\.json$/));

export default locales
