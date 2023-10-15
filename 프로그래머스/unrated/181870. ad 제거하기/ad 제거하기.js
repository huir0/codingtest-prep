function solution(strArr) {
    var answer = [];
    strArr.forEach(e => {
        if (!e.includes('ad')) answer.push(e);
    })
    return answer;
}