function solution(n) {
    var answer = [];
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            if (!answer.includes(i)) answer.push(i);
            n /= i;
        }
        
    }
    if (n > 1 && !answer.includes(n)) answer.push(n);
    return answer;
}