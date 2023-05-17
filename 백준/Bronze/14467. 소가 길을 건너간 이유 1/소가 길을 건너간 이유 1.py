import sys
input = sys.stdin.readline
n = int(input())

cows = [[] for _ in range(11)]

cnt = 0
for _ in range(n):
    cow, road = map(int, input().split())

    if not cows[cow]:
        cows[cow] = str(road)
    else:
        if cows[cow] != str(road):
            cows[cow] = str(road)
            cnt += 1

print(cnt)