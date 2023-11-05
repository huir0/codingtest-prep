function solution(dirs) {
    const direction = new Map([['U', [0,1]], ['D', [0,-1]], ['L', [-1,0]], ['R', [1,0]]]);
    let set = new Set();
    let [x,y] = [0,0];
    
    for (let step of dirs) {
        let fx = x;
        let fy = y;
        
        x += direction.get(step)[0];
        y += direction.get(step)[1];
        
        if (x < -5 || x > 5 || y < -5 || y > 5) {
            x -= direction.get(step)[0];
            y -= direction.get(step)[1];
            continue;
        }
        
        set.add(`${fx},${fy},${x},${y}`);
        set.add(`${x},${y},${fx},${fy}`);
    }
    return set.size / 2;
}