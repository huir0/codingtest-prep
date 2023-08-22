function solution(s) {
    var answer = '';
    let n = Math.trunc(s.length/2);
    if (s.length%2===0) {
        answer = s.slice(n-1,n+1);
    } else {
        answer = s[n];
    }
    return answer;
}