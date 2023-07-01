n,k = map(int,input().split())

coins = [int(input()) for _ in range(n)]

coins.reverse()

cnt = 0
for coin in coins:
    if coin <= k:
        cnt += k // coin
        k %= coin
print(cnt)
    