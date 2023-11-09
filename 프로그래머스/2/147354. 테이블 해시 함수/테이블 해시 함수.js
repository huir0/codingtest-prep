function solution(data, col, row_begin, row_end) {
    var answer = 0;
    data.sort((a,b) => {
        if (a[col-1] === b[col-1]) return b[0] - a[0];
        return a[col-1] - b[col-1];
    })
    for (let i = row_begin; i <= row_end; i++) {
        let S_i = data[i-1].reduce((a,b) => a + b % i, 0);
        answer ^= S_i;
    }
    return answer;
}