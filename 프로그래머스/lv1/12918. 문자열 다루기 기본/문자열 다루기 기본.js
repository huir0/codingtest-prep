function solution(s) {
    var answer = true;
    if (s.length !== 4 && s.length !== 6) {
        answer = false;
    }
    let alphabet = /[a-zA-Z]/;
    if (s.match(alphabet)) {
        answer = false;
    }
    return answer;
}