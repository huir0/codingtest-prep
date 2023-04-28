import sys

input = sys.stdin.readline

n = int(input())

tiles = [0] * (n+1)
tiles[0] = 1
tiles[1] = 1
for i in range(2, n+1):
    tiles[i] = (tiles[i-1] + tiles[i-2]) % 15746
print(tiles[n])