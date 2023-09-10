function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;
    let visited = Array(n).fill().map(a=>a=Array(m).fill(0));
    visited[0][0] = 1;
    let dx = [1,-1,0,0];
    let dy = [0,0,1,-1];
    let q = [[0,0]];
    
    while (q.length > 0 && q[q.length -1] !== [n-1][m-1]) {
        let [x,y] = q.shift();
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
                if (maps[nx][ny] === 1 && visited[nx][ny] ===0) {
                    visited[nx][ny] = visited[x][y] + 1;
                    q.push([nx,ny]);
                }
            }
        }
    }
    return visited[n-1][m-1] === 0 ? -1 : visited[n-1][m-1];
}