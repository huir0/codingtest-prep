function solution(n, k) {
    return (12000 * n) + (k - Math.trunc(n / 10)) * 2000;
}