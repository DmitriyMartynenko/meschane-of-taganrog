const dateOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const timeOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

export const formatDate = (input: Date | string | number, withTime: boolean = true): string => {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    return '';
  }

  const formattedDate = date.toLocaleDateString('ru-RU', dateOptions);
  if (!withTime) {
    return formattedDate;
  }

  const formattedTime = date.toLocaleTimeString('ru-RU', timeOptions);

  return `${formattedDate}, ${formattedTime}`;
};
