import heapq
from collections import deque

n,m,v = map(int, input().split())

visited_dfs = { i: False for i in range(1,n+1)}
visited_bfs = { i: False for i in range(1,n+1)}
nodes = { i: [] for i in range(1,n+1)}

for i in range(m):
    a,b = map(int,input().split())
    nodes[a].append(b)
    nodes[b].append(a)
    
def dfs(v,visited,ar):
    visited[v] = True
    heap = nodes[v][:]
    heapq.heapify(heap)
    while(len(heap)):
        node = heapq.heappop(heap)    
        if(visited[node]):
            continue
        else:
            ar.append(node)
            dfs(node,visited,ar)
    
    return ar    

def bfs(v,visited_bfs):
    stack = deque([v])
    res = []
    
    while(len(stack)):
        child = stack.popleft()
        visited_bfs[child] = True
        nodes[child].sort()
        for node in nodes[child]:
            if(visited_bfs[node] == False):
                stack.append(node)
                visited_bfs[node] = True
        res.append(child)
    return res
        
    

print(' '.join(list(map(str,dfs(v,visited_dfs,[v])))))
print(' '.join(list(map(str,bfs(v,visited_bfs)))))
    