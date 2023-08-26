function solution(x) {
    var answer = true;
    let y = x.toString();
    let sum_number = 0;
    for (let i = 0; i < y.length; i++) {
        sum_number += parseInt(y[i]);
    }
    if (x % sum_number !== 0) {
        answer = false;
    }
    return answer;
}