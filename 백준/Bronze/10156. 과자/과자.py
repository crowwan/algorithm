[a,b,c] = map(int,input().split())
mul = a * b

res = mul - c

if(res > 0):
    print(res)
else:
    print(0)