function solution(s) {
    var answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i) {
            answer.push(-1);
        } else {
            answer.push(i-s.lastIndexOf(s[i], i-1));
        }
    }
    return answer;
}