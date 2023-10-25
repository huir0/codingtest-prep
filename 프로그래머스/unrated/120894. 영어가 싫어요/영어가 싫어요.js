function solution(numbers) {
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const nu = [0,1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < eng.length; i++) {
        numbers = numbers.replaceAll(eng[i],nu[i]);
    }
    return parseInt(numbers);
}