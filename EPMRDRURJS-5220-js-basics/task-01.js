function getDate(day, month, year, format) {  
    const isDayInRange = day < 32 && day > 0;
    const isDayNumber = typeof day === 'number';
    const isMonthInRange = month < 13 && month > 0;
    const isMonthNumer = typeof month === 'number';
    const isYearNumber = typeof year === 'number';
    const isYearInRange = String(year).length === 4;
    const dateObj = new Date();

    if (isDayNumber && isDayInRange && isMonthNumer && isMonthInRange && isYearNumber && isYearInRange) {       
      if (format === 'day.month.year') {
        return `${day}.${month}.${year}`;
      } if (format === 'year_month_day') {
        return `${year}_${month}_${day}`;
      } if (format === 'object') {
        dateObj.setFullYear(year, month-1, day);
        return dateObj;
      } if (format === 'iso') {
        return dateObj.toISOString();
      } if (format === undefined) {
        return `${year}_${month}_${day}`;
      }    
    }
    return null;
}
  
module.exports = getDate;