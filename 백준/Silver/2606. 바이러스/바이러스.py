import sys
input = sys.stdin.readline

n = int(input())
computers = list(range(0, n+1))

def find(u):
    if computers[u] == u:
        return u # 자기 자신이 되는 순간 그것이 root이니 그것을 return 하는 것이다.
    computers[u] = find(computers[u])
    return computers[u]

def union(x, y):
    computers[find(y)] = find(x)

for _ in range(int(input())):
    i, j = map(int, input().split())
    union(i, j)

print(sum(1 for i in range(2, n+1) if find(1)==find(i)))