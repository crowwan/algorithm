import sys
tmp = list(map(int, sys.stdin.readline().split()))

n = tmp[0]
m = tmp[1]

NodeList = [ i for i in range(n+1) ]

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


for i in range(m):
    cmd = list(map(int,sys.stdin.readline().split()))
    if(cmd[0] == 0 and cmd[1] != cmd[2]):
        union(cmd[1],cmd[2])
    elif(cmd[0] == 1):
        if(find(cmd[1]) == find(cmd[2])):
            print("YES")
        else:
            print("NO")

