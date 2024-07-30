n = int(input())
for k in range(n):
    [a,b] = input().split(' ')
    res = ''
    
    for i in b:
        res += i * int(a)
    print(res)
