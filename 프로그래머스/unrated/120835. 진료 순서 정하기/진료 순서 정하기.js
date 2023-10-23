function solution(emergency) {
    var answer = new Array(emergency.length).fill(0);
    let order = {};
    for (let i = 0; i < emergency.length; i++) {
        order[emergency[i]] = i;
    }
    emergency.sort((a,b) => b - a);
    for (let j = 1; j <= emergency.length; j++) {
        answer[order[emergency[j-1]]] = j;
    }
    return answer;
}