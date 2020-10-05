const getAnswer = require('./task-04');

test('should return correct answer when question start with"how me"' , () => {  
    expect(getAnswer("Как мне накопить денег?")).toBe("Подумать и сделать");
});

test('should return correct answer when question start with"where to find"' , () => {  
    expect(getAnswer("где найти деньги?")).toBe("В гугле");
});
  
test('should return correct answer when question start with"how"' , () => {  
    expect(getAnswer("сколько?")).toBe("Не знаю");
});

test('should return correct answer when question end without "?"' , () => {  
    expect(getAnswer("сколько")).toBe(undefined);
});