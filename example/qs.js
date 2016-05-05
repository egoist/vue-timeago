export default function qs() {
  if (!location.search) {
    return {}
  }
  const search = location.search.substr(1).split('&')
  const ret = {}
  for (const pair of search) {
    const keyValue = pair.split('=')
    ret[keyValue[0]] = keyValue[1]
  }
  return ret
}
