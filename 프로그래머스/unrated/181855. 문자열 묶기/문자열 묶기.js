function solution(strArr) {
    var answer = 0;
    let count = 0;
    strArr.sort((a,b) => b.length - a.length);
    for (let i = 0; i < strArr.length-1; i++) {
        if (strArr[i].length !== strArr[i+1].length) {
            count++;
            answer = answer > count ? answer : count;
            count = 0;
        } else count++;
    }
    return answer;
}