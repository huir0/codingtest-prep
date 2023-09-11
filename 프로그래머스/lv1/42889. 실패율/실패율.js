function solution(N, stages) {
    var answer = [];
    let arr =[];
    for (let i = 1; i < N+1; i++) {
        arr.push([i,stages.filter(x=>x===i).length/stages.filter((x) => x >= i).length])
    }
    arr.sort((a,b) => b[1]-a[1]);
    answer = arr.map(a=>a = a[0])
    return answer;
}