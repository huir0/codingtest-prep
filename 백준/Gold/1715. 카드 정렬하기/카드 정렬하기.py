import sys
from queue import PriorityQueue

q = PriorityQueue()
n = int(sys.stdin.readline())

for _ in range(n):
    q.put(int(sys.stdin.readline()))
result = 0
if n == 1:
    print(0)
else:
    while q.qsize() > 1:
        a = q.get()
        b = q.get()
        result += a + b
        q.put(a+b)
    print(result)