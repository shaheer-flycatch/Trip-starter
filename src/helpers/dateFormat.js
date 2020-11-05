import moment from 'moment';
export const dateFormat = (date) => (
  moment(date).format('YYYY-MM-DD')
);
