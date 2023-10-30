function solution(n, k) {
    var answer = [];
    let factorial = [1];
    let numbers = [...Array(n)].map((_,i) => i + 1);
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i-1] * i;
    }
    
    k -= 1;
    
    while (n > 0) {
        let num = factorial[--n];
        let idx = Math.trunc(k / num);
        k %= num;
        answer.push(numbers[idx]);
        numbers.splice(idx, 1);
    }
    return answer;
}