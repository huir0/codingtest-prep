function solution(n) {
    var answer = '';
    let numbers = ['1','2','4'];
    while (n > 0) {
        n -= 1;
        answer = numbers[n%3] + answer;
        n = Math.floor(n/3);
    }
    return answer;
}