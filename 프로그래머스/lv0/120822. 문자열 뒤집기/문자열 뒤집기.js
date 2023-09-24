function solution(my_string) {
    var answer = [];
    for (let i of my_string) {
        answer.unshift(i);
    }
    return answer.join('');
}