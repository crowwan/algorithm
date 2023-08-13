from collections import deque

n, m = map(int, input().split())

visited = [False] * (100000 + 1)

def isValid(num):
  return num >= 0 and num <= 100000
    

def bfs(start, target):
  q = deque([])
  cnt = 0
  q.append((start,cnt))
  
  while(len(q)):
    head,count = q.popleft()
    if(head == target):
      return count
    for nx in (head - 1, head + 1, head * 2):
      if(isValid(nx) and not visited[nx]):
        visited[nx] = True
        q.append((nx, count + 1))
    
print(bfs(n, m))
    