n = int(input())
m = int(input())

NodeList = [i for i in range(n+1)]

def find(x):
    if(NodeList[x] == x):
        return x
    else:
        NodeList[x] = find(NodeList[x])
        return NodeList[x]

def union(x,y):
    x = find(x)
    y = find(y)
    
    if x != y:
        NodeList[y] = x


for _ in range(m):
    a,b = map(int,input().split())
    
    union(a,b)
print(sum(1 for i in range(2, n+1) if find(1)==find(i)))
