function solution(n, t, m, p) {
    var answer = '';
    let numbers = '';
    for (let i = 0; i < t * m; i++) {
        numbers += (i).toString(n).toUpperCase();
        if ((i+1 - p) % m === 0) answer += numbers[i];
    }
    return answer;
}