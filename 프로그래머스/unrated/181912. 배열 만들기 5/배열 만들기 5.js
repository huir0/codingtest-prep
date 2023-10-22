function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach(e => {
        if (e.slice(s, s+l) > k) answer.push(parseInt(e.slice(s, s+l)));
    })
    return answer;
}