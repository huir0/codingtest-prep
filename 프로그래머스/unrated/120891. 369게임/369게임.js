function solution(order) {
    var answer = 0;
    for (let i of order.toString()) {
        if (i !== '0' && i % 3 === 0) answer++;
    }
    return answer;
}