function solution(num_list) {
    var answer = [];
    num_list.sort(function compare(a,b) {
        return a - b;
    });
    answer = num_list.slice(5)
    return answer;
}