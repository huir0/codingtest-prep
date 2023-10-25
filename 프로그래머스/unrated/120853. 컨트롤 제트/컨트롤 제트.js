function solution(s) {
    let answer = [];
    s.split(' ').forEach(e => {
        if (e === 'Z') answer.pop();
        else answer.push(parseInt(e));
    })
    return answer.length === 0 ? 0 : answer.reduce((a,b) => a+b);
}