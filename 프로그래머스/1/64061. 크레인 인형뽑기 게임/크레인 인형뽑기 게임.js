function solution(board, moves) {
    var answer = 0;
    let stk = [];
    moves.forEach(e => {
        let i = 0;
        while (board[i][e-1] === 0 && i !== board.length-1) {
            i++;
        }
        if (board[i][e-1] !== 0) {
            stk.push(board[i][e-1]);
            board[i][e-1] = 0;
            if (stk.at(-1) === stk.at(-2)) {
                stk.pop();
                stk.pop();
                answer += 2;
            }
        }
            
    })
    return answer;
}