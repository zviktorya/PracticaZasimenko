const {getWeekDay, getWeekDayJson}  = require('./task-06');

test('should return date in day of week format' , () => {
    expect(getWeekDay(2020,9,15)).toBe('ЧТ');
});

test('should return date in day of week JSON format' , () => {
    expect(getWeekDayJson('{"year": 2020,"month": 9,"day": 13, "format": false}')).toBe("\"ВТ\"");
});

test('should return date in day of week JSON format' , () => {
    expect(getWeekDayJson('{"year": 2020,"month": 9,"day": 13, "format": true}')).toBe("\"ВТОРНИК\"");
});