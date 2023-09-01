function solution(a, b) {
    var answer = 0;
    let b_length = b.toString().length;    
    if (a*10**b_length + b > 2 * a * b) {
        answer = a*10**b_length + b;
    } else {
        answer = 2 * a * b;
    }
    return answer;
}