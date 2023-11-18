def solution(n):
    arr = [1,2]
    for i in range(1,n):
        arr.append((arr[i-1]+arr[i]) % 1234567)
    return arr[n-1]