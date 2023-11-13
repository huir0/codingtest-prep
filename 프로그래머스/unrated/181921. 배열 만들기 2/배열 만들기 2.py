def solution(l, r):
    answer = []

    for i in range(l, r+1):
        if all(c in '05' for c in str(i)):
            answer.append(i)

    if not answer:
        answer.append(-1)

    return answer
