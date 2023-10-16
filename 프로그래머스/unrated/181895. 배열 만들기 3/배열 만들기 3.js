function solution(arr, intervals) {
    var answer = [];
    intervals.forEach(([x,y]) => {
        arr.slice(x,y+1).map(f=>answer.push(f))
    });
    return answer;
}