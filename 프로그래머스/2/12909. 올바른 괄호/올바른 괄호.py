def solution(s):
    answer = True
    stk = []
    for i in s:
        stk.append(i)
        if len(stk) > 1 and stk[-1] == ')' and stk[-2] == '(':
            stk.pop()
            stk.pop()
    if len(stk) == 0:
        return True
    else:
        return False