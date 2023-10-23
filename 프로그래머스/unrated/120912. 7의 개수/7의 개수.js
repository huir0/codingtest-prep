function solution(array) {
    var answer = 0;
    array.forEach(e => {
        for (let i of e.toString()) {
            if (i === '7') answer++;
        }
    })
    return answer;
}