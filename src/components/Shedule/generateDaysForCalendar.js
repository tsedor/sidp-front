export const generateDaysForCalendar = ( year = new Date().getFullYear(), month = new Date().getMonth()+1 ) => {
  let calendar = [];
  let sunday = 0;

  const previousMonthLength = new Date(year, month-1, 0).getDate();
  const monthLength = new Date(year, month, 0).getDate();
  let dayOfWeek = new Date(`${year}-${month}-01`).getDay();
  dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

  for (let i = dayOfWeek; i > 1; i--) {
    sunday++;
    calendar.push({day: previousMonthLength - i + 2, month: month-1, current: false, sunday: sunday % 7 === 0 ? true : false})
  }

  for (let i = 1; i <= monthLength; i++) {
    sunday++;
    calendar.push({day: i, current: true, month, sunday: sunday % 7 === 0 ? true : false});
  }

  let x = 1;
  while (calendar.length % 7 !== 0) {
    sunday++;
    calendar.push({day: x++, current: false, month: month + 1, sunday: sunday % 7 === 0 ? true : false})
  }

  return calendar
}