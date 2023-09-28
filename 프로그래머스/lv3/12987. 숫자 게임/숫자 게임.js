function solution(A, B) {
    var answer = 0;
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    for (let i of A) {
        while (B.length > 0) {
            if (B.pop() > i) {
                answer++;
                break;
            }
        }
    }
    return answer;
}