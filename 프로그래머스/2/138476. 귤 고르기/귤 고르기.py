from collections import Counter

def solution(k, tangerine):
    answer = 0
    count = list(Counter(tangerine).values())
    count.sort(reverse=True)
    i = 0
    while k > 0 and i < len(count):
        k -= count[i]
        i += 1
        answer += 1
    return answer