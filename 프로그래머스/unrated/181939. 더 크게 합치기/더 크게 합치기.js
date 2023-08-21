function solution(a, b) {
    var answer = 0;
    let biggerB = b * Math.pow(10, String(a).length) + a;
    let biggerA = a * Math.pow(10, String(b).length) + b;
    if (biggerB > biggerA) {
        answer = biggerB;
    } else {
        answer = biggerA;
    }
    return answer;
}