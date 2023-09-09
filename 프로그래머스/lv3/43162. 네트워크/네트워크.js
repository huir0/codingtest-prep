function solution(n, computers) {
    var answer = 0;
    let visited = Array().fill().map(a=>a = Array(n).fill(false));
    
    const dfs = (node) => {
        visited[node] = true;
        
        for (let i = 0; i < computers[node].length; i++) {
            console.log(node,i)
            if (computers[node][i] === 1 && !visited[i]) dfs(i);
        }
    }
    
    for (let j = 0; j < n; j++) {
        if (!visited[j]) {
            dfs(j);
            answer++;
        }
    }
    return answer;
}