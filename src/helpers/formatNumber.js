// eslint-disable-next-line import/no-anonymous-default-export
export default (number, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(number);
