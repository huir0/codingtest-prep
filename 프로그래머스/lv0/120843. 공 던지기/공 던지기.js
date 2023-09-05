function solution(numbers, k) {
    var answer = 0;
    let count = 0;
    let i = -2;
    while (count < k) {
        i += 2;
        count++;
    }
    answer = numbers[i % numbers.length];
    return answer;
}