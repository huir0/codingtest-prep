function solution(n, lost, reserve) {
    var answer = 0;
    answer = n - lost.length;
    reserve.sort((a,b) => a-b);
    for (let i = 0; i < reserve.length; i++) {
        if (lost.includes(reserve[i])) {
            lost.splice(lost.indexOf(reserve[i]), 1);
            reserve.splice(i, 1);
            answer++;
            i--;
        }
    }
    for (let i of reserve) {
        if (lost.includes(i-1)){
            lost.splice(lost.indexOf(i-1),1);
            answer++;
        } else if (lost.includes(i+1)) {
            lost.splice(lost.indexOf(i+1),1);
            answer++;
        }
    }
    return answer;
}