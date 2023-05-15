import sys
input = sys.stdin.readline

n = int(input())
pleasure = [0] * n

for i in range(1, n):
    pleasure[i] = pleasure[i-1]+i

print(pleasure[n-1])