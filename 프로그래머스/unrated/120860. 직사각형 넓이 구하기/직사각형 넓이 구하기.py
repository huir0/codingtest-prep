def solution(dots):
    x = [dot[0] for dot in dots]
    y = [dot[1] for dot in dots]
    return abs(max(x) - min(x)) * abs(max(y) - min(y))