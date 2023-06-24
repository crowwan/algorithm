n = int(input())

li = [list(map(int,input().split())) for _ in range(n)]

blue = 0
white = 0

def findSquare(a,b,c,d):
    global blue, white
    tmp = li[a][c]
    for i in range(a,b):
        for j in range(c,d):
            if(li[i][j] != tmp):
                findSquare(a, (a+b)//2,c,(c+d)//2)
                findSquare(a,(a+b)//2,(c+d)//2,d)
                findSquare((a+b)//2,b,c,(c+d)//2)
                findSquare((a+b)//2,b,(c+d)//2,d)
                return
            
    if(tmp == 1):
        blue += 1
    else:
        white += 1
    return

findSquare(0,n,0,n)
print(white)
print(blue)