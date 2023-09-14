function solution(brown, yellow) {
    let total = brown + yellow;
    let sqrt = Math.trunc(Math.sqrt(total));
    for (let i = sqrt; i < total; i++) {
        for (let j = sqrt; j > 1; j--) {
            if (i * j === total) 
                {
                    if ((2 * i) + ((j - 2) * 2) === brown) return [i,j];
                    else break;
                }
        }
    }
}