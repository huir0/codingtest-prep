import sys

n = []
num = int(sys.stdin.readline())

for _ in range(num):
    n.append(str(sys.stdin.readline().strip()))

n = list(set(n))    

def merge_sort(a):
    if len(a) <= 1:
        return a
    else:
        mid = len(a) // 2
        left = merge_sort(a[:mid])
        right = merge_sort(a[mid:])
        return merge(left, right)
    
def merge(left, right):
    i = j = 0
    x = []
    
    while i < len(left) and j < len(right):
        if len(left[i]) < len(right[j]):
            x.append(left[i])
            i += 1
        elif len(left[i]) > len(right[j]):
            x.append(right[j])
            j += 1
        else:
            if left[i] <= right[j]:
                x.append(left[i])
                i += 1
            else:
                x.append(right[j])
                j += 1    
    x.extend(left[i:])        
    x.extend(right[j:])
            
    return x
result = merge_sort(n)
for i in result:
    print(i)