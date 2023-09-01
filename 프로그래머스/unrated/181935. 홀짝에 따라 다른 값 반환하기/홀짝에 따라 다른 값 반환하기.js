function solution(n) {
    var answer = 0;
     if (n % 2 === 0) {
         for (let i = n; i > 1; i -= 2) {
             answer += i ** 2;
         }
     } else {
         for (let i = n; i > 0; i -= 2) {
             answer += i;
         }
     }
    return answer;
}