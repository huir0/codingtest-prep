function solution(myString) {
    let answer = [];
    for (let i of myString.split('x')) {
        if (i !== '') answer.push(i);
    }
    return answer.sort();
}