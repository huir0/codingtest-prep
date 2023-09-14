function solution(n, words) {
    let answer = [0,0]
    for (let i = 0; i < words.length; i++) {
        if (i > words.indexOf(words[i])) {
            answer = [i%n+1,Math.ceil((i+1)/n)];
            break;
        } else if (i !== 0 && words[i][0] !== words[i-1].substr(-1)) {
            answer = [i%n+1,Math.ceil((i+1)/n)];
            break;
        }
    }
    return answer;
}