function solution(t, p) {
    var answer = 0;
    let length = p.length;
    for (let i = 0; i < t.length - length + 1; i++) {
        if (t.slice(i,i+length) <= parseInt(p)) answer++;
    }
    return answer;
}