import dayjs from 'dayjs';

const DateFormat = {
  DAY: 'DD MMM',
  VIEW: 'hh:mm',
  EDIT: 'DD/MM/YY hh:mm',
  SERVICE: 'YYYY-MM-DDThh:mm',
  SERVICE_DAY: 'YYYY-MM-DD'
};

const changeDateFormat = (rawDate, dateFormat) => dayjs(rawDate).format(dateFormat);
const getDuration = (startDate, endDate) => {
  const days = dayjs(endDate).diff(dayjs(startDate), 'd');
  const hours = dayjs(endDate).subtract(days, 'd').diff(dayjs(startDate), 'h');
  const minutes = dayjs(endDate).subtract(days, 'd').subtract(hours, 'h').diff(dayjs(startDate), 'm');

  if (days > 0) {
    return `${days}D ${hours}H ${minutes}M`;
  } else if (hours > 0) {
    return `${hours}H ${minutes}M`;
  } else {
    return `${minutes}M`;
  }
};

export {DateFormat, changeDateFormat, getDuration};
