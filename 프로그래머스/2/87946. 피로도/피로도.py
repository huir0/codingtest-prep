def solution(k, dungeons):
    dungeons.sort(key=lambda x: (x[0]-x[1]))
    arr = [0]*(k+1)
    for i in range(len(dungeons)):
        for j in range(k, dungeons[i][0]-1, -1):
            arr[j] = max(arr[j], 1 + arr[j-dungeons[i][1]])
    return arr[k]