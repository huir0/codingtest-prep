function solution(n) {
    var answer = "";
    n = n.toString();
    let arr = [];
    for (let i of n) {
        arr.push(i);
    }
    arr.sort((a,b) => b-a);
    for (let j of arr) {
        answer += j;
    }
    answer = parseInt(answer);
    return answer;
}