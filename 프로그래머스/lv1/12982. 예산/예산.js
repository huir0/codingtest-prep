function solution(d, budget) {
    var answer = 0;
    d = d.sort(function compare(a,b) { return a-b; });
    d.forEach((e)=>{
        budget -= e;
        if (budget >= 0) {
            answer++;
        } else {
            return answer;
        }
        
    })
    
    return answer;
}