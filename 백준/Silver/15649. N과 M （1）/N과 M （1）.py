tmp = list(map(int,input().split()))

n = tmp[0]
m = tmp[1]

def dfs(ar):
    if(len(ar) == m):
        print(' '.join(list(map(str,ar))))
        return
    for i in range(1,n+1):
        if(i in ar):
            continue
        else:
            ar.append(i)
            dfs(ar[:])
            ar.pop()

dfs([])
