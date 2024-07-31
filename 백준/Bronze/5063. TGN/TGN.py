n = int(input())

for _ in range(n):
    [a,b,c] = map(int,input().split())
    d = b - c
    if a == d:
        print('does not matter')
    elif a > d:
        print('do not advertise')
    else:
        print('advertise')