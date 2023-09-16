function solution(cacheSize, cities) {
    var answer = 0;
    let q = [];
    for (let i of cities) {
        if (q.includes(i.toLowerCase())) {
            answer++;
            let n = q.indexOf(i.toLowerCase());
            q.splice(q.length-1,0,q.splice(n,1)[0]);
        }
        else {
            q.push(i.toLowerCase());
            answer += 5;
        }
        if (q.length > cacheSize) q.shift();
        
    }
    return answer;
}