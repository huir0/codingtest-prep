def solution(board):
    n = len(board)
    dx = [-1, -1, -1, 0, 0, 1, 1, 1]
    dy = [-1, 0, 1, -1, 1, -1, 0, 1]
    safe_area = 0

    for i in range(n):
        for j in range(n):
            if board[i][j] == 1:
                continue
            is_safe = True
            for k in range(8):
                nx, ny = i + dx[k], j + dy[k]
                if nx < 0 or nx >= n or ny < 0 or ny >= n:
                    continue
                if board[nx][ny] == 1:
                    is_safe = False
                    break
            if is_safe:
                safe_area += 1
    return safe_area