import sys
from bisect import bisect_left,  bisect_right

input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n, m = map(int, input().split())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))

    a.sort()
    b.sort(reverse=True)

    def count_by_range(a,left, right):
        right_index = bisect_right(a, right)
        left_index = bisect_left(a, left)
        return right_index - left_index
    cnt = 0
    for i in b:
        cnt += count_by_range(a,i+1, float("inf"))

    print(cnt)