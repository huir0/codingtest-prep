function solution(num_list, n) {
    var answer = [];
    num_list.slice(n).forEach(e=>answer.push(e));
    num_list.slice(0,n).forEach(e=>answer.push(e));
    return answer;
}