function solution(phone_number) {
    var answer = '';
    let last = phone_number.slice(-4);
    answer = '*'.repeat(phone_number.length-4)+last;
    return answer;
}