function solution(arr) {
    const func = (a,b) => {
        while (b !== 0) {
            let c = a % b;
            a = b;
            b = c;
        }
        return a;
    };
    return arr.reduce((a,b) => a * b / func(a,b))
}