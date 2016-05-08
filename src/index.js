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

function formatTime(time) {
  const d = new Date(time)
  return d.toLocaleString()
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
        coerce(val) {
          return new Date(val).getTime()
        }
      },
      locale: String,
      maxTime: Number,
      autoUpdate: Number,
      format: Function
    },
    template: '<span v-text="timeago"></span>',
    data() {
      return {
        now: new Date().getTime()
      }
    },
    computed: {
      currentLocale() {
        return locales[this.locale || locale]
      },
      timeago() {
        const seconds = this.now / 1000 - this.since / 1000

        if (this.maxTime && seconds > this.maxTime) {
          clearInterval(this.interval)
          return this.format ? this.format(this.since) : formatTime(this.since)
        }

        const ret
          = seconds < MINUTE
          ? pluralOrSingular(seconds, this.currentLocale[0])
          : seconds < HOUR
          ? pluralOrSingular(seconds / MINUTE, this.currentLocale[1])
          : seconds < DAY
          ? pluralOrSingular(seconds / HOUR, this.currentLocale[2])
          : seconds < WEEK
          ? pluralOrSingular(seconds / DAY, this.currentLocale[3])
          : seconds < MONTH
          ? pluralOrSingular(seconds / WEEK, this.currentLocale[4])
          : seconds < YEAR
          ? pluralOrSingular(seconds / MONTH, this.currentLocale[5])
          : pluralOrSingular(seconds / YEAR, this.currentLocale[6])

        return ret
      }
    },
    ready() {
      if (!this.currentLocale) {
        throw new Error(`Make sure you have included locale ${this.currentLocale} when initializing vue-timeago`)
      }
      if (this.autoUpdate) {
        this.update()
      }
    },
    methods: {
      update() {
        const period = this.autoUpdate * 1000
        this.interval = setInterval(() => {
          this.now = new Date().getTime()
        }, period)
      }
    }
  }

  Vue.component(name, VueTimeago)
}
