function solution(gems) {
    let size = new Set(gems).size;
    let gemMap = new Map();
    let temp = [0, gems.length - 1];
    let start = 0;
    let end = 0;
    
    gemMap.set(gems[0], 1);
    
    while (end < gems.length && start < gems.length) {
        if (gemMap.size === size) {
            if (end - start < temp[1] - temp[0]) temp = [start,end];
            if (gemMap.get(gems[start]) === 1) gemMap.delete(gems[start]);
            else gemMap.set(gems[start], gemMap.get(gems[start]) - 1);
            start += 1;
        } else {
            end += 1;
            if (end === gems.length) break;
            gemMap.set(gems[end], (gemMap.get(gems[end]) || 0) + 1);
        }
    }
    return [temp[0] + 1, temp[1] + 1];
}