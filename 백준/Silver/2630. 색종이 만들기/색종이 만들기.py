import sys
n = int(sys.stdin.readline())
paper = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

white = 0
blue = 0

def cut_paper(x, y, n):
    global white, blue
    check = paper[x][y]
    for i in range(x, x+n):
        for j in range(y, y+n):
            if check != paper[i][j]:
                cut_paper(x,y,n//2)
                cut_paper(x+n//2,y,n//2)
                cut_paper(x, y+n//2, n//2)
                cut_paper(x+n//2, y+n//2, n//2)
                return
    if check == 0:
        white += 1
    else:
        blue += 1

cut_paper(0,0,n)
print(white)
print(blue)