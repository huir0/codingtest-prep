function solution(box, n) {
    var answer = [];
    box.forEach(e=>answer.push(Math.trunc(e/n)));
    return answer.reduce((a,b)=>a*b,1);
}