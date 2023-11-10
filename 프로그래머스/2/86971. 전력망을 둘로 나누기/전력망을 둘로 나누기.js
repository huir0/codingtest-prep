function solution(n, wires) {
    let answer = n;
    let graph = Array.from({length: n+1}, () => new Array());
    let visited = Array(n+1).fill(false);
    let count = Array(n+1).fill(1);

    for (let i = 0; i < n-1; i++) {
        let [a, b] = wires[i];
        graph[a].push(b);
        graph[b].push(a);
    }

    const dfs = (node) => {
        visited[node] = true;

        for (let i = 0; i < graph[node].length; i++) {
            let next = graph[node][i];
            if (visited[next]) continue;
            count[node] += dfs(next);
        }

        return count[node];
    }

    dfs(1);

    for (let i = 2; i <= n; i++) {
        let diff = Math.abs((n - count[i]) - count[i]);
        answer = Math.min(answer, diff);
    }

    return answer;
}
