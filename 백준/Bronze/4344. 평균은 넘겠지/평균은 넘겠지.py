n = int(input())
for i in range(n):
    score = list(map(int,input().split()))
    average = 0
    for i in range(1,score[0]+1):
        average += score[i]
    average /= score[0]
    student = 0
    for i in range(1,score[0]+1):
        if score[i] > average:
            student += 1
    student_rate = 100 * (student /score[0])
    print(f'{student_rate:.3f}%')