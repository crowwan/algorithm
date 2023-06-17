# 5000개의 배열을 만든다.
# n은 n-3 또는 n-5의 값 중 최소값 + 1이다.
# 만약에 n-3,n-5가 모두 -1이면 자기도 -1이다.

n = int(input())

ar = [-1 for _ in range(5005)]

ar[3] = 1
ar[5] = 1

for i in range(6,n+1):
    if ar[i-3] == -1 and ar[i-5] == -1:
        ar[i] = -1
    elif ar[i-3] != -1 and ar[i-5] != -1:
        ar[i] = min(ar[i-3],ar[i-5]) + 1
    elif ar[i-3] != -1:
        ar[i] = ar[i-3] + 1
    elif ar[i-5] != 5:
        ar[i] = ar[i-5] + 1

print(ar[n])
  