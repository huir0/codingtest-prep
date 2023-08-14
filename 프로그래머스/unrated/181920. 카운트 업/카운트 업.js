function solution(start, end) {
    var answer = [];
    i = 0
    while (start+i<=end) {
    answer.push(start+i);
    i++;
    }
    return answer;
}