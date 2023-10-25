function solution(my_str, n) {
    var answer = [];
    for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
        answer.push(my_str.slice(i*n,i*n+n));
    }
    return answer;
}