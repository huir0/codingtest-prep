function solution(k, score) {
    var answer = [];
    let honour = [];
    for (let i of score) {
        honour.push(i);
        honour.sort((a,b)=>b-a);
        if (honour.length > k) {
            honour.pop();
        }
        answer.push(honour[honour.length - 1]);
    }
    return answer;
}