function solution(s) {
    var answer = [0,0];
    let length = 0;
    while (s !== "1") {
        length = s.length;
        s = s.replaceAll(0,"");
        answer[1] += length - s.length;
        s = s.length.toString(2);
        answer[0] += 1;
    }
    return answer;
}