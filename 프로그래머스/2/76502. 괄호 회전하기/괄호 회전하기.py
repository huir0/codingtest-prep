def solution(s):
    answer = 0
    for i in range(len(s)):
        arr = s[i:] + s[:i]
        stack = []
        for j in arr:
            stack.append(j)
            if len(stack) >= 2:
                par = stack[-2] + stack[-1]
                if par in ['{}', '[]', '()']:
                    stack.pop()
                    stack.pop()
        if len(stack) == 0:
            answer += 1
    return answer