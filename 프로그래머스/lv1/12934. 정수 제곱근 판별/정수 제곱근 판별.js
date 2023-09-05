function solution(n) {
    var answer = 0;
    let squared = Math.sqrt(n);
    if (squared === Math.trunc(squared)) {
        answer = Math.trunc(squared + 1) * Math.trunc(squared + 1);
    } else {
        answer = -1;
    }
    return answer;
}