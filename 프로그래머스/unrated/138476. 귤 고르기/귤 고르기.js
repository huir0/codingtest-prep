function solution(k, tangerine) {
    var answer = 0;
    let unique = new Set(tangerine);
    let count = new Array();
    let countObj = {};
    tangerine.forEach((e) => {
        if (countObj[e] === undefined) {
            countObj[e] = 1;
        } else {
            countObj[e]++;
        }
    })
    
    unique.forEach((e) =>{
        count.push(countObj[e]);
    })
    count.sort((a,b) => b - a);
    let i = 0;
    while (k > 0) {
        k -= count[i];
        i++;
        answer++;
    }
    return answer;
}