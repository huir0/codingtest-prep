function solution(priorities, location) {
    var answer = 1;
    const regexp = /[1-9]/;
    let i = 0;
    let n = priorities.length;
    while (regexp.test(priorities) === true) {
        if (priorities[i%n] === Math.max(...priorities) && i%n !== location) {
            priorities[i%n] = 0;
            answer++;
        }   
        if (priorities[i%n] === Math.max(...priorities) && i%n === location) {
            return answer;
        }
        i++;
    }
}