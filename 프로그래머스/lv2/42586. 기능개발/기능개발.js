function solution(progresses, speeds) {
    var answer = [];
    progresses.reverse();
    speeds.reverse();
    while (progresses.length > 0) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        let count = 0;
        while (progresses[progresses.length -1 ] >= 100) {
            progresses.pop();
            speeds.pop();
            count++;
        }
        if (count !== 0) answer.push(count);
        
    }
    return answer;
}