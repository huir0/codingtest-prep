function solution(myString, pat) {
    var answer = 0;
    for (let i = pat.length - 1; i <= myString.length; i++) {
        if (myString.slice(i-pat.length, i) === pat) answer++;
    }
    return answer;
}