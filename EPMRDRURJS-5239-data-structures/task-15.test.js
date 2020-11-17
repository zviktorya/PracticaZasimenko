const sort = require('./task-15');

test('should return array to sort by length and alphabetically', () => {
    const string = 'кошка мышь птица попугай хомяк слон ян ан афа';
    expect(sort(string)).toEqual(["ан", "ян", "афа", "мышь", "слон", "кошка", "птица", "хомяк", "попугай"]);
});