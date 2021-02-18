export default (date, locale = 'en-US') =>
  new Date(date).toLocaleDateString(locale, {
    weekday: undefined,
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });
