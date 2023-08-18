function solution(a, b, n) {
    var answer = 0;
    while (n >= a) {
        if (n/ a >= 1) {
            var quotient = Math.trunc(n/a);
            var receive_cola = quotient * b;
            n -= quotient * a;
            n +=  receive_cola;
            answer += receive_cola;
        } else {
            return;
        }
    }
    return answer;
}