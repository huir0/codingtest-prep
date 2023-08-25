function solution(s, n) {
    var answer = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            if (upper.includes(s[i])) {
                let j = upper.indexOf(s[i]) + n;
                answer += upper[j % 26];
            } else {
                let j = lower.indexOf(s[i]) + n;
                answer += lower[j % 26];
            }
        } else {
            answer += ' ';
        }
    }

    return answer;
}