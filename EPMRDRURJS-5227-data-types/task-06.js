function getWeekDay(year,month,day, format = false) {
    const daysShort = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']; 
    const daysLong = ['ВСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];   
    const date = new Date(year,month,day);
    const weekDay = date.getDay();
    return format ? daysLong[weekDay] : daysShort[weekDay]; 
}

function getWeekDayJson(json) {
    const {year,month,day,format} = JSON.parse(json);    
    const weekDay = getWeekDay(year,month,day,format);    
    const dateJson = JSON.stringify(weekDay);
    return dateJson;
}

module.exports = {getWeekDay, getWeekDayJson};