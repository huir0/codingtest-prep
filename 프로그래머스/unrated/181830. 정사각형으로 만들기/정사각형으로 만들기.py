def solution(arr):
    row = len(arr)
    col = len(arr[0])
    
    if row > col:
        for i in range(row):
            arr[i] += [0] * (row - col)
    elif col > row:
        arr += [[0]*col for _ in range(col - row)]
        
    return arr
