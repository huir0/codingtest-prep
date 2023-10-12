function solution(hp) {
    const ants = [5,3,1];
    let answer = 0;
    for (let i of ants) {
        while (hp >= i) {
            hp -= i;
            answer++;
        }
    }
    return answer;
}