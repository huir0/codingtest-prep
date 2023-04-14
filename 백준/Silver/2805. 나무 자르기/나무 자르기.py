import sys

n, m = list(map(int, sys.stdin.readline().split()))
trees = list(map(int, sys.stdin.readline().split()))
trees.sort()

def check(mid):
    total = 0
    for tree in trees:
        if tree > mid:
            total += (tree - mid)
        else:
            total += 0
    return total
    
left, right = 1, max(trees)

while left <= right:
    mid = (left + right) //2
    if check(mid) >= m:
        left = mid +1
    else:
        right = mid -1

print(right)