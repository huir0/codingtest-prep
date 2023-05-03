import sys
input = sys.stdin.readline

n = int(input())

bag = [3, 5]


dp = [0 for _ in range(n+1)]
dp[0] = 1

for kg in bag:
    for i in range(kg,n+1):
        if i % kg == 0:
            dp[i] = i // kg

for kg in bag:
    for j in range(kg,n+1):
        if j % kg != 0 and dp[j-kg] != 0:
            if dp[j] != 0:

                dp[j] = min(dp[j], dp[j-kg] + 1)
            else: dp[j] += dp[j-kg] + 1

if dp[n] == 0:
    print(-1)
else:
    print(dp[n])