function solution(s, skip, index) {
    var answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i of skip) {
        alphabet = alphabet.replace(i,'');
    }
    for (let j of s) {
        answer += alphabet[(alphabet.indexOf(j)+index) % alphabet.length]
    }
    return answer;
}