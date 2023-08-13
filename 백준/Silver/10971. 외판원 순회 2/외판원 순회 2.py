import sys
def dfs(index, count, min_distance, start):
    if count == n:
        if distance[index][start] != 0:
            min_distance += distance[index][start] # 시작 도시로 가는 거리를 더한다.
            result.append(min_distance)
        return
    visited[start] = True
    for i in range(n): # 백트래킹으로 방문하지 않은 도시들을 방문한다.
        if visited[i] == False:
            if distance[index][i]!=0:
                visited[i] = True
                min_distance += distance[index][i]
                dfs(i, count+1, min_distance, start)
                visited[i] = False
                min_distance -= distance[index][i]

if __name__ == "__main__":
    n = int(sys.stdin.readline())
    distance = []
    result = []
    for i in range(n):
        distance.append(list(map(int, sys.stdin.readline().split())))
    
    for i in range(n): # 모든 도시에서 시작한다.
        visited = [False] * n
        dfs(i, 1, 0, i)
        
    print(min(result))