function solution(arr) {
    var answer = [];
    for (let i of arr) {
        let j = 0;
        while (j < i) {
        j++;            
        answer.push(i);
        }
    }
    return answer;
}