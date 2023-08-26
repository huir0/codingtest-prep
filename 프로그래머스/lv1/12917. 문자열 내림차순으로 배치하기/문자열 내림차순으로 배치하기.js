function solution(s) {
    var answer = '';
    let temp = [];
    for (let i = 0; i < s.length; i++) {
        temp.push(s.charCodeAt(i));
    }
    temp.sort(function compare(a,b) {
        return b-a;
    });
    temp.forEach((e) => {
        answer += String.fromCharCode(e);
    })
    return answer;
}