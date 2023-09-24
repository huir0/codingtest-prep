function solution(slice, n) {
    var answer = 1;
    let i = 1;
    while (i * slice < n) {
        answer++;
        i++;
    }
    return answer;
}