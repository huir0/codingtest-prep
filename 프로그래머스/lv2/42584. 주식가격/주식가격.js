function solution(prices) {
    var answer = [];
    for (let i = 0; i < prices.length; i++) {
        let count = 0;
        for (let j = i+1; j < prices.length+1; j++) {
            if (j === prices.length) {
                answer.push(count);
                break;
            }
            if (prices[i] <= prices[j]) {
                count++;
            } else {
                answer.push(count+1);
                break;
            }
        }
    }
    return answer;
}