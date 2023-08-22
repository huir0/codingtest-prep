function solution(numbers) {
    var answer = 45;
    numbers.sort();
    for (let i=0;i<10;i++){
        if (i === numbers[i]) {
            answer -= i;
        } else {
            numbers.unshift(0);
        }
    }
    return answer;
}