function solution(arr, n) {
    for (let i = arr.length % 2 === 0 ? 1 : 0; i < arr.length; i = i+2) {
        arr[i] += n;
    }
    return arr;
}