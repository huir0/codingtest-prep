function solution(my_string) {
    var answer = [];
    for (let i of my_string) {
        if (i >= 0 && i <= 9) answer.push(parseInt(i));
    }
    answer.sort((a,b) => a-b);
    return answer;
}