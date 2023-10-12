function solution(my_string) {
    var answer = '';
    for (let i of my_string) {
        i === i.toUpperCase() ? answer += i.toLowerCase() : answer += i.toUpperCase();
    }
    return answer;
}