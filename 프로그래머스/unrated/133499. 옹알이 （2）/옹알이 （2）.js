function solution(babbling) {
    var answer = 0;
    let words = ["aya", "ye", "woo", "ma"];
    let reg = /[a-z]/;
    for (let i = 0; i < babbling.length; i++) {
        words.forEach((e) => {
            babbling[i] = babbling[i].replaceAll(e,words.indexOf(e));
        })
        if (babbling[i].match(reg) === null) {
            let flag = true;
            if (babbling[i].length > 1) {
                for (let j = 1; j < babbling[i].length; j++) {
                if (babbling[i][j] === babbling[i][j-1]) {
                    flag = false;
                    break;
                    }
                }
            }
            if (flag === true) {
                answer++;
            }
        }
    }
    return answer;
}