function solution(user_id, banned_id) {
    let answer = [];
    let arr = Array.from({length: banned_id.length}, () => 0);
    
    const match = (str1, str2) => {
        if (str1.length !== str2.length) return false;
        for (let k = 0; k < str1.length; k++) {
            if (str2[k] === '*') continue;
            if (str1[k] !== str2[k]) return false;
        }
        return true;
    }
    
    const dfs = (i, visited) => {
        if (i === banned_id.length) {
            let temp = visited.slice();
            temp.sort();
            if (!answer.includes(temp.join(''))) answer.push(temp.join(''));
            return;
        }
        
        for (let j = 0; j < user_id.length; j++) {
            if (visited.includes(user_id[j])) continue;
            if (!match(user_id[j], banned_id[i])) continue;
            visited.push(user_id[j]);
            dfs(i + 1, visited);
            visited.pop();
        }
    }
    
    dfs(0, []);
    
    return answer.length;
}