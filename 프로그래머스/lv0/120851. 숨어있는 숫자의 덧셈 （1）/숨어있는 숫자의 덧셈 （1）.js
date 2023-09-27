function solution(my_string) {
    let answer = 0;
    let regex = /[0-9]/;
    for (let i of my_string) {
        if (regex.test(i)) answer += parseInt(i);
    }
    return answer;
}