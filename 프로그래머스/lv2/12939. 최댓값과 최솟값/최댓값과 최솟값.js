function solution(s) {
    var answer = '';
    let arr = s.split(' ').map((e)=>parseInt(e));
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    answer += min;
    answer += ' '  + max;
    return answer;
}