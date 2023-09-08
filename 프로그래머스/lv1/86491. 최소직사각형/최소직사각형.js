function solution(sizes) {
    var answer = 0;
    let x = 0;
    let y = 0;
    for (let i of sizes) {
        i.sort((a,b) => a-b);
        x = x > i[0] ? x : i[0];
        y = y > i[1] ? y : i[1];
    }
    answer = x * y;
    return answer;
}