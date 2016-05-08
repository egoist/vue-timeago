const UNIT_INTERVAL = {}
UNIT_INTERVAL.SECOND = 1
UNIT_INTERVAL.MINUTE = UNIT_INTERVAL.SECOND * 60
UNIT_INTERVAL.HOUR = UNIT_INTERVAL.MINUTE * 60
UNIT_INTERVAL.DAY = UNIT_INTERVAL.HOUR * 24
UNIT_INTERVAL.WEEK = UNIT_INTERVAL.DAY * 7
UNIT_INTERVAL.MONTH = UNIT_INTERVAL.DAY * 30
UNIT_INTERVAL.YEAR = UNIT_INTERVAL.DAY * 365

function pluralOrSingular(data, locale) {
  const count = Math.round(data)
  if (Array.isArray(locale)) {
    return count > 1 ? locale[1].replace(/%s/, count) : locale[0].replace(/%s/, count)
  }
  return locale.replace(/%s/, count)
}

function canTimeago(seconds, targetStage, maxStage) {
  const isOutOfMaxTime = !maxStage || seconds <= UNIT_INTERVAL[maxStage]

  return seconds >= UNIT_INTERVAL[targetStage] && isOutOfMaxTime
}

export default function install(Vue, {
  name = 'timeago',
  locale = 'en-US',
  locales = null,
  maxtime = {
    stage: null,
    format: v => v
  }
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

        if (canTimeago(seconds, 'YEAR', maxtime.stage)) {
          return pluralOrSingular(seconds / UNIT_INTERVAL.YEAR, currentLocale[6])
        }
        if (canTimeago(seconds, 'MONTH', maxtime.stage)) {
          return pluralOrSingular(seconds / UNIT_INTERVAL.MONTH, currentLocale[5])
        }
        if (canTimeago(seconds, 'WEEK', maxtime.stage)) {
          return pluralOrSingular(seconds / UNIT_INTERVAL.WEEK, currentLocale[4])
        }
        if (canTimeago(seconds, 'DAY', maxtime.stage)) {
          return pluralOrSingular(seconds / UNIT_INTERVAL.DAY, currentLocale[3])
        }
        if (canTimeago(seconds, 'HOUR', maxtime.stage)) {
          return pluralOrSingular(seconds / UNIT_INTERVAL.HOUR, currentLocale[2])
        }
        if (canTimeago(seconds, 'MINUTE', maxtime.stage)) {
          return pluralOrSingular(seconds / UNIT_INTERVAL.MINUTE, currentLocale[1])
        }
        if (canTimeago(seconds, 'SECOND', maxtime.stage)) {
          return pluralOrSingular(seconds / UNIT_INTERVAL.SECOND, currentLocale[0])
        }
        return maxtime.format(this.since)
      },
      update() {
        setInterval(() => {

        }, 16)
      }
    }
  }

  Vue.component(name, VueTimeago)
}
