function solution(routes) {
    var answer = 1;
    routes.sort((a,b)=>a[1]-b[1]);
    let exit = routes[0][1];
    routes.forEach((e)=>{
        if (e[0] > exit) {
            answer++;
            exit = e[1];
        }
    })
    return answer;
}