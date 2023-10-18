function solution(n, edge) {
    let answer = 0;
    let check = new Array(n + 1).fill(-1);
    let adj = Array.from(Array(n + 1), () => new Array());
    
    for(let i = 0; i < edge.length; i++){
        adj[edge[i][0]].push(edge[i][1]);
        adj[edge[i][1]].push(edge[i][0]);
    }
    
    let queue = [1];
    check[1] = 0;
    
    while(queue.length > 0){
        let node = queue.shift();
        
        for(let i = 0; i < adj[node].length; i++){
            let next = adj[node][i];
            if(check[next] === -1){
                check[next] = check[node] + 1;
                queue.push(next);
            }
        }
    }
    
    check.sort((a, b) => b - a);
    for(let i = 0; i < check.length; i++){
        if(check[i] === check[0]) answer++;
    }
    return answer;
}