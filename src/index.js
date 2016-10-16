const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const MONTH = DAY * 30
const YEAR = DAY * 365

function pluralOrSingular(data, locale) {
  if (data === 'just now') {
    return locale
  }
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
  if (!locales || Object.keys(locales).length === 0) {
    throw new TypeError('Expected locales to have at lease one locale.')
  }

  const VueTimeago = {
    props: {
      since: {
        required: true
      },
      tag: {
        type: String,
        default: 'span'
      },
      locale: String,
      maxTime: Number,
      autoUpdate: Number,
      format: Function
    },
    data() {
      return {
        now: new Date().getTime()
      }
    },
    computed: {
      currentLocale() {
        const current = locales[this.locale || locale]
        if (!current) {
          return locales[locale]
        }
        return current
      },
      sinceTime() {
        return new Date(this.since).getTime()
      },
      timeago() {
        const seconds = (this.now / 1000) - (this.sinceTime / 1000)

        if (this.maxTime && seconds > this.maxTime) {
          clearInterval(this.interval)
          return this.format ? this.format(this.sinceTime) : formatTime(this.sinceTime)
        }

        const ret
          = seconds <= 5
          ? pluralOrSingular('just now', this.currentLocale[0])
          : seconds < MINUTE
          ? pluralOrSingular(seconds, this.currentLocale[1])
          : seconds < HOUR
          ? pluralOrSingular(seconds / MINUTE, this.currentLocale[2])
          : seconds < DAY
          ? pluralOrSingular(seconds / HOUR, this.currentLocale[3])
          : seconds < WEEK
          ? pluralOrSingular(seconds / DAY, this.currentLocale[4])
          : seconds < MONTH
          ? pluralOrSingular(seconds / WEEK, this.currentLocale[5])
          : seconds < YEAR
          ? pluralOrSingular(seconds / MONTH, this.currentLocale[6])
          : pluralOrSingular(seconds / YEAR, this.currentLocale[7])

        return ret
      }
    },
    mounted() {
      if (this.autoUpdate) {
        this.update()
      }
    },
    render(h) {
      return h(this.tag, this.timeago)
    },
    methods: {
      update() {
        const period = this.autoUpdate * 1000
        this.interval = setInterval(() => {
          this.now = new Date().getTime()
        }, period)
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  Vue.component(name, VueTimeago)
}
