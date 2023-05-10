import sys
input = sys.stdin.readline

n = int(input())

score = [[] for _ in range(n)]

for i in range(n-1, -1, -1):
    score[i] = int(input())

cnt = 0
stack = [score[0]]
for i in range(1, n):
    if stack[-1] > score[i]:
        stack.append(score[i])
    else:
        m = (score[i] - stack[-1])
        cnt += m + 1
        stack.append(score[i]-m-1)
print(cnt)