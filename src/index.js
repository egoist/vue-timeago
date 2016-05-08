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
      ? locale[1].replace(/%s/, count)
      : locale[0].replace(/%s/, count)
  }
  return locale.replace(/%s/, count)
}

export default function install(Vue, {
  name = 'timeago',
  locale = 'en-US',
  locales = null
} = {}) {
  if (typeof locales !== 'object') {
    throw new TypeError('Expected locales to have at lease one locale.')
  }

  const VueTimeago = {
    props: {
      since: {
        required: true,
        coerce(val) {return new Date(val).getTime()}
      },
      locale: String,
      maxTime: null,
      autoUpdate: null
    },
    template: '<span v-text="timeago(since)"></span>',
    ready() {
      if (this.autoUpdate) {
        this.update()
      }
    },
    methods: {
      timeago() {
        const now = new Date().getTime()
        const seconds = Math.round(now / 1000 - this.since / 1000)

        const currentLocale = locales[this.locale || locale]
        if (!currentLocale) {
          throw new Error(`Make sure you have included locale ${this.locale || locale} when initializing vue-timeago`)
        }

        const ret
          = seconds < MINUTE
          ? pluralOrSingular(seconds, currentLocale[0])
          : seconds < HOUR
          ? pluralOrSingular(seconds / MINUTE, currentLocale[1])
          : seconds < DAY
          ? pluralOrSingular(seconds / HOUR, currentLocale[2])
          : seconds < WEEK
          ? pluralOrSingular(seconds / DAY, currentLocale[3])
          : seconds < MONTH
          ? pluralOrSingular(seconds / WEEK, currentLocale[4])
          : seconds < YEAR
          ? pluralOrSingular(seconds / MONTH, currentLocale[5])
          : pluralOrSingular(seconds / YEAR, currentLocale[6])

        return ret
      },
      update() {
        setInterval(() => {

        }, )
      }
    }
  }

  Vue.component(name, VueTimeago)
}
