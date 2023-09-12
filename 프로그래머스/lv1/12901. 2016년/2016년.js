function solution(a, b) {
    var answer = '';
    let months = [31,29,31,30,31,30,31,31,30,31,30,31];
    let days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let count = 0;
    for (let i = 0; i < a-1; i++) {
        count += months[i]
    }
    count += b-1;
    answer = days[count % 7];
    return answer;
}