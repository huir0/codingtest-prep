function solution(money) {
    var answer = [0,0];
    while (money >= 5500) {
        money -= 5500;
        answer[0]++;
    }
    answer[1] = money;
    return answer;
}