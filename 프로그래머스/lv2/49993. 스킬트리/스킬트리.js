function solution(skill, skill_trees) {
    var answer = 0;
    for (let i of skill_trees) {
        let a = -1;
        let flag = true;
        for (let j of i) {
            let skillIndex = skill.indexOf(j);
            if (skillIndex !== -1) {
                if (skillIndex === a + 1) {
                    a = skillIndex;
                } else {
                    flag = false;
                    break;
                }
            }
        }
        if (flag === true) answer++;
    }
    return answer;
}
