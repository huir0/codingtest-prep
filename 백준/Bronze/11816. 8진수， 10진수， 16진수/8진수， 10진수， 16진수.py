import sys
input = sys.stdin.readline

n = str(input())
if n[1] == "x":
    print(int(n, base=16))
elif n[0] == "0":
    print(int(n, base=8))
else:
    print(n)
