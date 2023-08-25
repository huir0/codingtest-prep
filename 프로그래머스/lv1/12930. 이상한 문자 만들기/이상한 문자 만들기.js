function solution(s) {
    var answer = '';
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            if (j%2 === 0) {
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            j++;
        } else {
            answer += ' ';
            j = 0;
        }
    }
    return answer;
}