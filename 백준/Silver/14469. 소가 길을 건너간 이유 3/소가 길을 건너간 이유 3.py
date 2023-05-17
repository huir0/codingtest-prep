import sys
input = sys.stdin.readline

n = int(input())
cows = []
for i_ in range(n):
    cows.append(list(map(int, input().split())))

cows.sort()
total_seconds = 0

for cow in cows:
    if cow[0] > total_seconds:
        total_seconds += (cow[0]-total_seconds) + cow[1]
    else:
        total_seconds += cow[1]

print(total_seconds)