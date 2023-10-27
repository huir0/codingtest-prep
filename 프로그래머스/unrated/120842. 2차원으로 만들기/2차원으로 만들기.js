function solution(num_list, n) {
    var answer = [];
    let temp = [];
    for (let i of num_list) {
        if (temp.length === n-1) {
            temp.push(i)
            answer.push(temp);
            temp = [];
        }
        else temp.push(i);
    }
    return answer;
}