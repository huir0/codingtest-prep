def solution(arr, queries):
    result = []
    for query in queries:
        s, e, k = query
        sub_arr = []
        for num in arr[s:e+1]:
            if num > k:
                sub_arr.append(num)
        if sub_arr:
            result.append(min(sub_arr))
        else:
            result.append(-1)
    return result
