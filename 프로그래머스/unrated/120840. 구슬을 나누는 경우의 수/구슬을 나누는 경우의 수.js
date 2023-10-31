function solution(balls, share) {
    if (balls === share) return 1;
    const factorial = (n) => {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    return Math.round(factorial(balls) / (factorial(share) * factorial(balls-share)));
}