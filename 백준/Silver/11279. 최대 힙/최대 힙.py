import sys
from queue import PriorityQueue

n = int(sys.stdin.readline())

q = PriorityQueue(maxsize=n)

for i in range(1,n+1):
    a = str(sys.stdin.readline().strip())

    if a == "0":
        if not q.empty():
            print(q.get()[1])
        else:
            print(0)
    else:
        q.put((-int(a), a))