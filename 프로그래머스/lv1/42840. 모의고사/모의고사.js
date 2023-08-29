function solution(answers) {
    var answer = [];
    let supo1 = [1,2,3,4,5];
    let supo2 = [2,1,2,3,2,4,2,5];
    let supo3 = [3,3,1,1,2,2,4,4,5,5];
    let supo_answers = [0,0,0];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === supo1[i%supo1.length]) {
            supo_answers[0]++;
        }
        if (answers[i] === supo2[i%supo2.length]) {
            supo_answers[1]++;
        }
        if (answers[i] === supo3[i%supo3.length]) {
            supo_answers[2]++;
        }
    }
    if (supo_answers[0] === supo_answers[1] && supo_answers[1] === supo_answers[2]) {
        answer = [1,2,3];
    } else if (supo_answers.indexOf(Math.max(...supo_answers)) !== supo_answers.lastIndexOf(Math.max(...supo_answers))) {
        answer = [supo_answers.indexOf(Math.max(...supo_answers))+1, supo_answers.lastIndexOf(Math.max(...supo_answers))+1]
    } else {
        answer = [supo_answers.indexOf(Math.max(...supo_answers))+1];
    }
    return answer;
}