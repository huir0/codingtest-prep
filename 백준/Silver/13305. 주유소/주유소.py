import sys
input = sys.stdin.readline

n = int(input())
km = list(map(int, input().split()))
price = list(map(int, input().split()))
minimum = 0
station = price[0]
for i in range(n-1):
    station = min(station, price[i])
    minimum += km[i] * station

print(minimum)
    