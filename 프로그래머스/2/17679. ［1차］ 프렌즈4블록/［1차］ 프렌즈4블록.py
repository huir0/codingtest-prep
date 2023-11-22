def solution(m, n, board):
    board = [list(x) for x in board]
    matched = True
    
    while matched:
        matched = []
        for i in range(m-1):
            for j in range(n-1):
                if board[i][j] == board[i][j+1] == board[i+1][j] == board[i+1][j+1] != '_':
                    matched.append([i, j])
                    
        for i, j in matched:
            board[i][j] = board[i][j+1] = board[i+1][j] = board[i+1][j+1] = '_'

        for _ in range(m):
            for i in range(m-1):
                for j in range(n):
                    if board[i+1][j] == '_':
                        board[i+1][j], board[i][j] = board[i][j], '_'

    return sum(x.count('_') for x in board)