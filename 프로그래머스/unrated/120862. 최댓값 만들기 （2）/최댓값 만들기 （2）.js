function solution(numbers) {
    let negative = numbers.filter(e => e < 0);
    let positive = numbers.filter(e => e >= 0);
    if (negative.length === 1 && positive.length === 1) return negative[0] * positive[0];
    negative.sort((a,b) => a - b);
    positive.sort((a,b) => b - a);
    return Math.max(negative[0] * negative[1] | 0, positive[0] * positive[1] | 0);
}