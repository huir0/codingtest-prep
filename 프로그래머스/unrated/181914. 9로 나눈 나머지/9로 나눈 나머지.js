function solution(number) {
    return number.split('').reduce((a,b) => parseInt(a)+parseInt(b)) % 9;
}