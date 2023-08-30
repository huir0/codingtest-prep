function solution(s) {
    var answer = 0;
    const numbers = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'zero': 0};
    for (const [key, value] of Object.entries(numbers)) {
        s = s.replaceAll(key, value);
    }
    answer = parseInt(s);
    return answer;
}