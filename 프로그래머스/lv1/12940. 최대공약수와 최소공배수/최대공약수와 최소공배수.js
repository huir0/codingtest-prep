function solution(n, m) {
    var answer = [];
    let maximum = 0;
    let minimum = 0;
    let a = n < m ? n : m;
    let b = n < m ? m : n;
    
    if (a % b === 0) {
        answer = [a, b];
    } else {
        for (let i = b - 1; i > 0; i--) {
            if (a % i === 0 && b % i === 0) {
                maximum = i;
                break;
            }
        }
        minimum = Math.floor(a * b / maximum);
        answer = [maximum, minimum];
    }
    
    return answer;
}