function solution(n) {
    var answer = '';
    const wm = '수박';
    if (n%2 === 1) {
        answer = wm.repeat(n/2)+wm[0];
    } else {
        answer = wm.repeat(n/2);
    }
    return answer;
}