function getAnswer(question) {
    const text = question.toLowerCase();
    let answer;

    if (text.endsWith("?")) {  
        if (text.startsWith("как мне")) {
            answer = "Подумать и сделать";
        } else if (text.startsWith("где найти")) {
            answer = "В гугле";
        } else {
            answer = "Не знаю";
        }
    }
    return answer;
}
module.exports = getAnswer;