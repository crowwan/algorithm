[a,b,c] = map(int,input().split(' '))
d = int(input())
e = c + d
f = b + e // 60
g = a + f // 60

print('%s %s %s' % (g % 24, f % 60, e % 60))
