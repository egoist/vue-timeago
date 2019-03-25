import defaultConverter from './converter'

export const createTimeago = (opts = {}) => {
  const locales = opts.locales || {}
  const name = opts.name || 'Timeago'

  return {
    name,

    props: {
      datetime: {
        required: true
      },
      title: {
        type: [String, Boolean]
      },
      locale: {
        type: String
      },
      autoUpdate: {
        type: [Number, Boolean]
      },
      converter: {
        type: Function
      },
      converterOptions: {
        type: Object
      }
    },

    data() {
      return {
        timeago: this.getTimeago()
      }
    },

    computed: {
      localeName() {
        return this.locale || this.$timeago.locale
      }
    },

    mounted() {
      this.startUpdater()
    },

    beforeDestroy() {
      this.stopUpdater()
    },

    render(h) {
      return h(
        'time',
        {
          attrs: {
            datetime: new Date(this.datetime),
            title:
              typeof this.title === 'string'
                ? this.title
                : this.title === false
                ? null
                : this.timeago
          }
        },
        [this.timeago]
      )
    },

    methods: {
      getTimeago(datetime) {
        const converter = this.converter || opts.converter || defaultConverter
        return converter(
          datetime || this.datetime,
          locales[this.locale || this.$timeago.locale],
          this.converterOptions || {}
        )
      },

      convert(datetime) {
        this.timeago = this.getTimeago(datetime)
      },

      startUpdater() {
        if (this.autoUpdate) {
          const autoUpdaye = this.autoUpdate === true ? 60 : this.autoUpdate
          this.updater = setInterval(() => {
            this.convert()
          }, autoUpdaye * 1000)
        }
      },

      stopUpdater() {
        if (this.updater) {
          clearInterval(this.updater)
          this.updater = null
        }
      }
    },

    watch: {
      autoUpdate(newValue) {
        this.stopUpdater()
        if (newValue) {
          this.startUpdater()
        }
      },

      datetime() {
        this.convert()
      },
      localeName() {
        this.convert()
      },
      converter() {
        this.convert()
      },
      converterOptions: {
        handler() {
          this.convert()
        },
        deep: true
      }
    }
  }
}

export const install = (Vue, opts) => {
  if (Vue.prototype.$timeago) {
    return
  }

  if (process.env.NODE_ENV === 'development' && !Vue.observable) {
    console.warn(`[vue-timeago] Vue 2.6 or above is recommended.`)
  }

  const $timeago = {
    locale: opts.locale
  }
  Vue.prototype.$timeago = Vue.observable
    ? Vue.observable($timeago)
    : new Vue({ data: $timeago })

  const Component = createTimeago(opts)
  Vue.component(Component.name, Component)
}

export const converter = defaultConverter

export default install
