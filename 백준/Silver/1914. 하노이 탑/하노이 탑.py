import sys
n = int(sys.stdin.readline())
x = 1
y = 3

def move(n:int, x:int, y:int) -> None:
    
    if n > 1:
        move((n-1), x, 6-x-y)
    
    print(f'{x} {y}')
    
    if n > 1:
        move((n-1), 6-x-y, y)

count = (2 ** n) -1
print(count)
if n <= 20:
    move(n,x,y)