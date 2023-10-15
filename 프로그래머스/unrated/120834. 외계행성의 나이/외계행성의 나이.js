function solution(age) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var answer = '';
    for (let i of age.toString()) {
        answer += alphabet[i];
    }
    return answer;
}