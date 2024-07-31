n = int(input())

res1 = 100
res2 = 100

for _ in range(n):
    [a,b] = map(int,input().split())
    if a > b :
        res2 -= a
    elif a < b:
        res1 -= b
    
print(res1)
print(res2)