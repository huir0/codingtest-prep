function solution(s) {
    var answer = 0;
    if (s.length === 1) return 1;
    let same = [s[0]];
    let diff = [];
    for (let i = 1; i < s.length; i++) {
        if (s[i] === same[0] || same.length === 0) {
            same.push(s[i])
        } else {
            diff.push(s[i])
        }
        if (same.length === diff.length || i === s.length - 1) {
            answer++;
            same = [];
            diff = [];
        }
    }
    return answer;
}