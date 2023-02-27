function solution(quiz) {
    return quiz.map(a => eval(a.split('=')[0]) === +a.split('=')[1]  ? "O" : 'X');
}