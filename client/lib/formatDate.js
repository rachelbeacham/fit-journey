const format = require('date-fns/format');

function formatDate(date) {
  const newDate = new Date(date);
  const formattedDate = format(newDate, 'MMMM dd, yyyy');
  return formattedDate;
}
module.exports = formatDate;
