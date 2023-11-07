function solution(board)
{
    let answer = 0;
    
    if (board.length < 2 || board[0].length < 2) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 1) {
                    return 1;
                }
            }
        }
        return 0;
    }

    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[0].length; j++) {
            if (board[i][j] > 0) {
                let min = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1]);
                board[i][j] = min + 1;
            }
            if (answer < board[i][j]) {
                answer = board[i][j];
            }
        }
    }

    return answer * answer;
}
