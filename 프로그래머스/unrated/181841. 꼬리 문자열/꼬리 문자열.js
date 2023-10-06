function solution(str_list, ex) {
    var answer = '';
    for (let i of str_list) {
        if (i.includes(ex) === false) answer += i;
    }
    return answer;

}