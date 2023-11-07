function solution(arrayA, arrayB) {
    arrayA.sort((a,b) => a-b);
    arrayB.sort((a,b) => a-b);
    
    const func = (a, b) => {
        for (let i = a[0]; i > 0; i--) {
            if (a.every(e => e % i === 0) && !b.some(f => f % i === 0)) return i;
        }
        return 0;
    }
    
    return Math.max(func(arrayA,arrayB), func(arrayB,arrayA));
}