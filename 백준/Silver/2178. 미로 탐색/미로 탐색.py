from collections import deque
n,m = map(int,input().split())

visited = [[False for _ in range(m)] for _ in range(n)]

mmap = [[ int(i) for i in input()] for _ in range(n)]

def checkIsValidPath(x,y):
    
    if x < 0 or x >= n or y < 0 or y >= m:
        return False
    return not visited[x][y]

direction = [(-1,0),(1,0),(0,-1),(0,1)]

def bfs():
    q = deque([(0,0,1)])
    res = float('inf')    
    while(len(q)):
        popped = q.popleft()
        
        if(popped[0] == n-1 and popped[1] == m-1):
            if res > popped[2]:
                res = popped[2]
        
        for dir in direction:
            x = popped[0] + dir[0]
            y = popped[1] + dir[1]
            cnt = popped[2]
            if(checkIsValidPath(x,y) and mmap[x][y] == 1):
                q.append((x,y,cnt+1))
                visited[x][y] = True
            
    return res
print(bfs())