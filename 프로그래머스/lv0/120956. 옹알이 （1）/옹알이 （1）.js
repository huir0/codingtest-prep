function solution(babbling) {
    var answer = 0;
    let words = ["aya", "ye", "woo", "ma"];
    let reg = /[a-z]/;
    for (let i = 0; i < babbling.length; i++) {
        words.forEach((f) => {
            babbling[i] = babbling[i].replaceAll(f,"0");
        })
        if (babbling[i].match(reg) === null) {
            answer++;
        }
    }
    return answer;
}