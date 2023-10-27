function solution(arr) {
    let i = 1;
    while (i < arr.length) {
        i *= 2;
    }
    for (let j = arr.length; j < i; j++) {
        arr.push(0)
    }
    return arr;
}