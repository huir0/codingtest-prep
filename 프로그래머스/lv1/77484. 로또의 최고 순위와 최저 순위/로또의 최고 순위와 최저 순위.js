function solution(lottos, win_nums) {
    let count = 0;
    let zero = 0;
    let win = {6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6};
    for (let i of lottos) {
        if (win_nums.includes(i)) count++; 
        else if (i === 0) zero++;
    }
    let answer = [win[count+zero], win[count]];
    return answer;
}