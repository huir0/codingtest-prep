function solution(k, d) {
    var answer = 0;
    for (let a = 0; a <= d; a = a+k) {
        let b = Math.sqrt(Math.pow(d,2) - Math.pow(a,2));
        let count = Math.floor(b / k) + 1;
        answer += count;
    }
    return answer;
}