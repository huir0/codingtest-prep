n = int(input())
for i in range(n):
    answer = list(map(str,input().split("X")))
    score = 0
    for i in range(0,len(answer)):
        if answer[i] != '':
            for j in range(80):
                if answer[i].count('O') == j:
                    for k in range(1, j+1):
                        
                        score += k
    print(score)