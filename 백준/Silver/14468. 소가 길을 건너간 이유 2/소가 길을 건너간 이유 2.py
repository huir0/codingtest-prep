import sys
input = sys.stdin.readline

cows = input()
cnt = 0
for i in range(52):
    for j in range(i+1,52):
        if cows[i] == cows[j]:
            for k in cows[i:j+1]:
                if cows[i:j+1].count(k) == 1:
                    cnt += 1
            break
    


print(cnt//2)