function solution(s) {
    var answer = '';
    let i = 0;
    while (i < s.length) {
        if (s.indexOf(s[i], i+1) !== -1) s = s.replaceAll(s[i],'');
        else {
            answer += s[i];
            i++;
        }
    }
    return answer.split('').sort().join('');
}