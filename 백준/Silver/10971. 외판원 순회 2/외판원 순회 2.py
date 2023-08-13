n = int(input())

li = [list(map(int,input().split())) for _ in range(n)]
visited = [False] * n

m = 1e9

def dfs(dep, start, cost):
  global m
  if( dep == n - 1 and li[start][0] != 0):
    m = min(m, cost + li[start][0])
    return
  for i in range(n):
    if( not visited[i] and li[start][i] != 0):
      visited[i] = True
      dfs(dep + 1, i, cost + li[start][i])
      visited[i] = False
      
visited[0] = 1
dfs(0,0,0)
print(m)