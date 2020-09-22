const getDate = require('./task-01');

test('should return date in day.month.year format' , () => {
  expect(getDate(2,10,2020,'day.month.year')).toBe('2.10.2020');
});
test('should return date in year_month_day format' , () => {
    expect(getDate(2,10,2020,'year_month_day')).toBe('2020_10_2');
});
test('should return date in object format' , () => {
    expect(
        typeof getDate(2,10,2020,'object') === 'object'
    ).toBe(true);
});
test('should return date in iso format' , () => {
    expect(typeof getDate(2,10,2020,'iso') === 'string'
    ).toBe(true);
});
test('should return date in year_month_day format when format is undefined' , () => {
    expect(getDate(2,10,2020)).toBe('2020_10_2');
});

test('should return date in null format when format is incorrect' , () => {
    expect(getDate(2,10,2020, 'year.day.month')).toBe(null);
});