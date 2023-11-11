function solution(a, b) {
    const gcd = (a,b) => {
        return b ? gcd(b, a % b) : a;
    }
    let x = gcd(a,b);
    a /= x;
    b /= x;
    
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    
    return b === 1 ? 1 : 2;
    
}