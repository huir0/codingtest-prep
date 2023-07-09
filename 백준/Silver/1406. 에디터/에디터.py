import sys

input = sys.stdin.readline

string = str(input().strip())
n = int(input())

l_stack = list(string)
r_stack = []
for _ in range(n):
    instruction = list(map(str, input().split()))
    if len(instruction) > 1:
        a, b = instruction[0], instruction[1]
        if a == "P":
            l_stack.append(b)

    else:
        if instruction[0] == "L":
            if len(l_stack) != 0:
                r_stack.append(l_stack.pop())
        elif instruction[0] == "D":
            if len(r_stack) != 0:
                l_stack.append(r_stack.pop())
        elif instruction[0] == "B":
            if len(l_stack) != 0:
                l_stack.pop()



print(''.join(l_stack + r_stack[::-1]))

