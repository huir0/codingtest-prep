function solution(numbers, hand) {
    var answer = '';
    const leftButton = [1,4,7];
    const rightButton = [3,6,9];
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    let leftHand = [3,0];
    let rightHand = [3,2];
    
    numbers.forEach(e => {
        if (leftButton.includes(e)) {
            answer += 'L';
            leftHand = keypad[e];
        }
        else if (rightButton.includes(e)) {
            answer += 'R';
            rightHand = keypad[e];
        } else {
            let leftDist = Math.abs(keypad[e][0] - leftHand[0]) + Math.abs(keypad[e][1] - leftHand[1]);
            let rightDist = Math.abs(keypad[e][0] - rightHand[0]) + Math.abs(keypad[e][1] - rightHand[1]);
            
            if (rightDist === leftDist) {
                if (hand === 'right') {
                    answer += 'R';
                    rightHand = keypad[e];
                } else {
                    answer += 'L';
                    leftHand = keypad[e];
                }
            } else if (rightDist < leftDist) {
                answer += 'R';
                rightHand = keypad[e];
            } else {
                answer += 'L';
                leftHand = keypad[e];
            }
        }
        
    })
    return answer;
}