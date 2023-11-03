function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a,b) => a+b);
    let sum2 = queue2.reduce((a,b) => a+b);
    
    if ((sum1 + sum2) % 2 !== 0) return -1;
    let length = (queue1.length + queue2.length) * 2;
    let count = 0;
    let i = 0;
    let idx1 = 0, idx2 = 0;
    
    while (i < length && idx1 !== queue1.length && idx2 !== queue2.length) {
        if (sum1 === sum2) return count;
        if (sum1 > sum2) {
            let v = queue1[idx1++];
            sum1 -= v;
            sum2 += v;
            queue2.push(v);
        } else {
            let v = queue2[idx2++];
            sum2 -= v;
            sum1 += v;
            queue1.push(v);
        }
        count++;
        i++;
    }
    
    return sum1 === sum2 ? count : -1;
}