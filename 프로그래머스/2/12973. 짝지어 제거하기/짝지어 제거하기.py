def solution(s):
    stk = []
    
    for i in s:
        stk.append(i)
        if len(stk) > 1 and stk[-1] == stk[-2]:
            stk.pop()
            stk.pop()
    if len(stk) == 0:
        return 1
    return 0