function solution(chicken) {
    var answer = 0;
    while (chicken >= 10) {
        let temp = Math.trunc(chicken / 10);
        answer += temp;
        chicken = chicken % 10 + temp;
    }
    return answer;
}