from collections import deque
n = int(input())

mmap = [[int(i) for i in input()] for _ in range(n)]

visited = [[False for _ in range(n)] for _ in range(n)]

hosu = {}

path = [(-1,0),(1,0),(0,-1),(0,1)]

def canVisit(i,j):
    if i < 0 or j < 0 or i >= n or j >= n:
        return False
    if mmap[i][j] == 1 and visited[i][j] == False:
        return True

def bfs(i,j,num):
    q = deque([(i,j)])
    cnt = 1
    while len(q):
        head = q.popleft()
        visited[head[0]][head[1]] = num   
        for a,b in path:
            if canVisit(head[0] + a, head[1] + b):
                q.append((head[0]+a,head[1]+b))
                visited[head[0]+a][head[1]+b] = num   
                cnt += 1
                
                
    hosu[num] = cnt
num = 1
for i in range(n):
    for j in range(n):
        if mmap[i][j] == 1 and canVisit(i,j):
            bfs(i,j,num)
            num += 1

print(len(hosu.keys()))
for i in sorted(list(hosu.values())):
    print(i)