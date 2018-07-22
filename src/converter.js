import toNow from 'date-fns/distance_in_words_to_now'

export default (date, locale, converterOptions) => {
  const { includeSeconds, addSuffix = true } = converterOptions
  return toNow(date, {
    locale,
    includeSeconds,
    addSuffix
  })
}
