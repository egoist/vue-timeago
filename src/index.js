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
              typeof this.title === 'string' ?
                this.title :
                this.title === false ?
                  null :
                  this.timeago
          }
        },
        [this.timeago]
      )
    },

    methods: {
      getTimeago(datetime) {
        const converter = this.converter || opts.converter || defaultConverter
        return converter(datetime || this.datetime, locales[this.locale || opts.locale], this.converterOptions || {})
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
      locale() {
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
  const Component = createTimeago(opts)
  Vue.component(Component.name, Component)
}

export default install
