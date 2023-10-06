function solution(arr, k) {
    if (k % 2 === 0) arr = arr.map(e=>e+k);
    else arr = arr.map(e=>e*k);
    
    return arr;
}