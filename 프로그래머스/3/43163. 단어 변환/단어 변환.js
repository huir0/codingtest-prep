function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    let visited = Array(words.length).fill(false);
    let queue = [[begin,0]];
    
    while (queue.length > 0) {
        let [word, count] = queue.shift();
        if (word === target) return count;
        
        words.forEach((next,idx) => {
            if (!visited[idx] && change(word,next)) {
                visited[idx] = true;
                queue.push([next,count+1]);
            }
        })
    }
    return 0;
}

const change = (word, next) => {
    let diff = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== next[i]) diff++;
        if (diff > 1) return false;
    }
    return true;
}