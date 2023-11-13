from collections import Counter

def solution(array):
    counter = Counter(array)
    max_count = max(counter.values())
    max_count_items = [k for k, v in counter.items() if v == max_count]
    
    if len(max_count_items) == 1:
        return max_count_items[0]
    else:
        return -1
