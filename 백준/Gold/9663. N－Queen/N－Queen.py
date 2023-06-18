n = int(input())

final = []

def checkIsValid(i, prevQueens):
    cr = len(prevQueens)
    for r in range(cr):
        if(prevQueens[r] == i or abs(prevQueens[r] - i) == cr - r):
            return False
    return True
    

def dfs(row,prevQueens):
    if(row == n):
        global final
        final.append(prevQueens[:])
        return
    for i in range(n):
        if(checkIsValid(i,prevQueens)):
            prevQueens.append(i)
            dfs(row+1,prevQueens)
            prevQueens.pop()
        
dfs(0,[])

print(len(final))