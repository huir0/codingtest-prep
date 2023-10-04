function solution(n) {
    let arr = [1,2];
    for (let i = 1; i < n; i++) {
        arr.push((arr[i-1]+arr[i]) % 1234567);
    }
    return arr[n-1];
}