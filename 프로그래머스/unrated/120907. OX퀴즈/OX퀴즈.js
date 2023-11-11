function solution(quiz) {
    return quiz.map(i => {
        const [x, o, y, , z] = i.split(' ');
        return (o === '-' ? parseInt(x) - parseInt(y) : parseInt(x) + parseInt(y)) === parseInt(z) ? 'O' : 'X';
    });
}