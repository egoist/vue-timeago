import toNow from 'date-fns/distance_in_words_to_now'

export const createTimeago = (opts = {}) => {
  const locales = opts.locales || {}
  const name = opts.name || 'Timeago'

  return {
    name,

    props: {
      since: {
        required: true
      },
      title: {
        type: [String, Boolean]
      },
      locale: {
        type: String
      },
      autoUpdate: {
        type: Number
      },
      includeSeconds: {
        type: Boolean
      }
    },

    data() {
      return {
        timeago: this.convert(this.since)
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
            datetime: new Date(this.since),
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
      convert(date) {
        return toNow(date, {
          addSuffix: true,
          locale: locales[this.locale || opts.locale],
          includeSeconds: this.includeSeconds
        })
      },

      startUpdater() {
        if (this.autoUpdate) {
          this.updater = setInterval(() => {
            this.timeago = this.convert(this.since)
          }, this.autoUpdate * 1000)
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
      }
    }
  }
}

export default (Vue, opts) => {
  const Component = createTimeago(opts)
  Vue.component(Component.name, Component)
}
