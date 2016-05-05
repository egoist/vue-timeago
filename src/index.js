const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const MONTH = DAY * 30
const YEAR = DAY * 365

function pluralOrSingular(data, locale) {
  const count = Math.round(data)
  if (Array.isArray(locale)) {
    return count > 1
      ? count + locale[1]
      : count + locale[0]
  }
  return count + locale
}

export default function install(Vue, {
  name = 'timeago',
  locale = null
} = {}) {
  if (!Array.isArray(locale)) {
    throw new TypeError('Expected locale to be an array')
  }

  Vue.filter(name, timeago)

  function timeago(then) {
    then = new Date(then).getTime()
    const now = new Date().getTime()
    const seconds = Math.round(Math.abs(now / 1000 - then / 1000))

    const ret
      = seconds < MINUTE
      ? pluralOrSingular(seconds, locale[0])
      : seconds < HOUR
      ? pluralOrSingular(seconds / MINUTE, locale[1])
      : seconds < DAY
      ? pluralOrSingular(seconds / HOUR, locale[2])
      : seconds < WEEK
      ? pluralOrSingular(seconds / DAY, locale[3])
      : seconds < MONTH
      ? pluralOrSingular(seconds / WEEK, locale[4])
      : seconds < YEAR
      ? pluralOrSingular(seconds / MONTH, locale[5])
      : pluralOrSingular(seconds / YEAR, locale[6])

    return ret
  }
}
