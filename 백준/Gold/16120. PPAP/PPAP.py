import sys
input = sys.stdin.readline

a = str(input().strip())

stack = []

if a[0] == 'A':
    print('NP')
elif a[:2] == 'PA':
    print('NP')
elif a[-1] == 'A':
    print('NP')
else:
    for i in a:
        stack.append(i)
        while len(stack) >= 4 and stack[-4:] == ['P','P','A','P']:
            stack.pop()
            stack.pop()
            stack.pop()
    if stack and stack == ["P"]:
        print('PPAP')
    else:
        print('NP')