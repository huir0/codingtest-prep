import sys
input = sys.stdin.readline

n, k = map(int, input().split())

coins = ([0] * n)
for i in range(n-1, -1, -1):
    coins[i] = (int(input()))

count = 0
for coin in coins:
    count += k // coin
    k %= coin

print(count)