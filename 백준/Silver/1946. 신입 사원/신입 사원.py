import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    s = [list(map(int, input().split())) for _ in range(n)]

    s.sort(key=lambda x: x[0])
    passed = [s[0]]

    for i in range(1,n):
        if s[i][0] > passed[-1][0] and s[i][1] > passed[-1][1]:
            continue
        else:
            passed.append(s[i])

    print(len(passed))