function solution(myString) {
    var answer = [];
    let arr = myString.split('x');
    arr.forEach(e=> {
        e !== '' ? answer.push(e.length): answer.push(0)
    })
    return answer;
}