from typing import MutableSequence
import sys
num = int(sys.stdin.readline())
x = []
for i in range(num):
    x.append(int(sys.stdin.readline()))

def merge_sort(a: MutableSequence) -> None:
    n = len(a)
    temp = [None] * n
    
    def _merge_sort(a: MutableSequence, left: int, right: int) -> None:
        if left < right:
            center = (left + right) // 2
        
            _merge_sort(a, left, center)
            _merge_sort(a, center+1, right)

            i = j = left
            k = l = 0

            while i <= center:
                temp[k] = a[i]
                k += 1
                i += 1
            while i <= right and l < k:
                if temp[l] <= a[i]:
                    a[j] = temp[l]
                    l += 1
                else:
                    a[j] = a[i]
                    i += 1
                j += 1

            while l < k:
                a[j] = temp[l]
                j += 1
                l += 1
    
    _merge_sort(a, 0, n-1)        


merge_sort(x)
for i in range(num):
    print(x[i])