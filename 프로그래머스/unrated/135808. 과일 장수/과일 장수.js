function solution(k, m, score) {
    var answer = 0;
    let arr = [];
    score.sort((a,b)=>b-a);
    for (let i of score) {
        if (arr.length != m) arr.push(i);
        else {
            answer += arr[arr.length - 1] * m;
            arr = [i];
        }
    }
    if (arr.length === m) answer += arr[arr.length-1] * m;
    return answer;
}