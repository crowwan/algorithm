# 1에서 n까지 가는 경우랑 같다.

n = int(input())

ar = [ float('inf') for _ in range(n + 1)]

ar[1] = 0

for i in range(2,n+1):
    if i % 2 == 0 and i % 3 == 0:
        ar[i] = min(ar[i//2],ar[i//3],ar[i-1]) + 1
    elif i % 2 == 0:
        ar[i] = min(ar[i//2],ar[i-1]) + 1
    elif i % 3 == 0:
        ar[i] = min(ar[i//3],ar[i-1]) + 1
    else:
        ar[i] = ar[i-1] + 1

print(ar[n])
