function solution(arr) {
    return arr.slice(arr.indexOf(2), arr.lastIndexOf(2)+1).length === 0? [-1] : arr.slice(arr.indexOf(2), arr.lastIndexOf(2)+1);
}