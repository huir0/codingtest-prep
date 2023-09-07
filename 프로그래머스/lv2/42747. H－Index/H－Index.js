function solution(citations) {
    citations.sort((a,b) => b-a);
    let n = 0;
    while (n < citations.length && citations[n] > n) {
        n++;
    }
    return n
}