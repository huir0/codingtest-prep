function solution(keymap, targets) {
    var answer = [];
    for (let i = 0; i < targets.length; i++) {
        let count = 0;
        for (let j of targets[i]) {
            let min = 100;
            let flag = false;
            for (let k of keymap) {
                let index = k.indexOf(j);
                if (index !== -1) {
                    min = min <= index + 1? min : index + 1;
                    flag = true;
                }
            }
            if (flag === false) {
                count = 0;
                break;
            }
            if (min !== 100) count += min;
        }
        if (count === 0) answer.push(-1);
        else answer.push(count);        
    }
    return answer;
}