def solution(num, total):
    if num % 2 == 0:
        start = total // num + 1 - num // 2
    else:
        start = total // num - num // 2
    return list(range(start, start + num))
