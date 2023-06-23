n,m = map(int,input().split())

li = [0]* (m+1)

coins = [int(input()) for _ in range(n)]

li[0] = 1

for coin in coins:
    for j in range(coin,m+1):
        li[j] += li[j-coin]

print(li[m])