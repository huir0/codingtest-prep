function solution(s) {
    var answer = '';
    if (s !== "") {
        let arr = s.split(" ");
        for (let i of arr) {
            if (i !== '') i = i[0].toUpperCase() + i.slice(1).toLowerCase();
            answer += i + " ";
        }
        answer = answer.slice(0, answer.length -1);
    }
    
    return answer;
}