function solution(s)
{
    var answer = 0;
    for (let center = 0; center < 2 * s.length - 1; center++) {
        let left = Math.trunc(center / 2);
        let right = left + center % 2;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            answer = Math.max(answer, right - left + 1);
            left--;
            right++;
        }
    }
    return answer;
}