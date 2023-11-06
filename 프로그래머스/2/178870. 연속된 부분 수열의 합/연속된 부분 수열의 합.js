function solution(sequence, k) {
    if (sequence.includes(k)) return [sequence.indexOf(k),sequence.indexOf(k)];
    
    let s = 0, e = 0, sum = sequence[0];
    let result = [0, sequence.length -1];
    
    while (s < sequence.length) {
        if (sum < k) {
            if (e + 1 < sequence.length) sum += sequence[++e];
            else break;
        } else {
            if (sum === k && e - s < result[1] - result[0]) {
                result = [s,e];
            }
            sum -= sequence[s++];
        }
    }
    return result;
}