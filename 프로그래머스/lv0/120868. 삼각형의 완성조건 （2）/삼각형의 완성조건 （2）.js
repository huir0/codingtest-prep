function solution(sides) {
    var answer = 0;
    if (sides[0] > sides[1]) {
        let temp = sides[0];
        sides[0] = sides[1];
        sides[1] = temp;
    }
    if (sides[0] + 1 === sides[1]) {
        answer = 1;
    } else {
        answer += sides[1] - (sides[1] - sides[0]);
        answer += sides[0] - 1;
    }
    
    return answer;
}