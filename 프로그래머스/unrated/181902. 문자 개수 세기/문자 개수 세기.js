function solution(my_string) {
    var answer = Array(52).fill(0);
    for (let i of my_string) {
        if (i.charCodeAt() > 96) 
        answer[i.charCodeAt() - 65 - 6]++;
        else answer[i.charCodeAt() - 65]++;
    }
    return answer;
}