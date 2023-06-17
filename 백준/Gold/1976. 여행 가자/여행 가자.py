n = int(input())
m = int(input())

NodeList = [ i for i in range(n) ]

def union(x,y):
    x = find(x)
    y = find(y)
    
    if(x == y):
        return
    
    NodeList[y] = x

def find(x):
    if(NodeList[x] == x):
        return x
    else:
        NodeList[x] = find(NodeList[x])
        return NodeList[x]

for i in range(n):
    cmd = list(map(int,input().split()))
    for j in range(len(cmd)):
        if(cmd[j] == 1):
            union(i,j)
    
path = list(map(int,input().split()))

cur = 0
isOk = True

for i in range(1,len(path)):
    if(find(path[cur]-1) == find(path[i]-1)):
        cur = i
        continue
    else:
        isOk = False
        break

if(isOk):
    print('YES')
else:
    print('NO')
