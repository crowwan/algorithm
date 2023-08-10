from collections import deque
n = int(input())

for i in range(n):
  m = int(input())
  tmp = list(map(int,input().split()))
  p = { tmp[i] : i + 1 for i in range(len(tmp)) }
  visited = [False for _ in range(m+1)]
  cnt = 0
  for k in p:
    q = deque([])
    q.append(k)
    
    new = False
    while(len(q)):
      key = p[q.popleft()]
      if(not visited[key]):
        q.append(key)
        visited[key] = True
        new = True
    if(new): 
      cnt += 1
  print(cnt)
    
    
  