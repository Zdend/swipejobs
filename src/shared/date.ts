const DATE_LOCALE = 'en-US';

const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat(DATE_LOCALE, options).format(date);
};

export const displayDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return formatDate(date, {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric'
  });
};

export const displayTime = (isoDate: string): string => {
  const date = new Date(isoDate);
  return formatDate(date, {
    timeZoneName: 'short',
    hour: 'numeric',
    minute: 'numeric'
  });
};
