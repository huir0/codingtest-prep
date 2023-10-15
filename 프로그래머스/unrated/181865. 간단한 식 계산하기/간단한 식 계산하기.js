function solution(binomial) {
    let [x,y,z] =  binomial.split(' ');
    if (y === '+') return parseInt(x) + parseInt(z);
    else if (y === '-') return x - z;
    else return x * z;
}