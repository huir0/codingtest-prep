function solution(arr, divisor) {
    var answer = [];
    arr.forEach((e)=>{
        if (e % divisor === 0) {
            answer.push(e);
        }
    })
    answer.sort(function compare(a,b) {
        return a-b;
    })
    if (!answer.length) {
        answer.push(-1);
    }
    return answer;
}