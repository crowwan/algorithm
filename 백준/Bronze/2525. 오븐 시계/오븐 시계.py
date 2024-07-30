[a,b] = map(int,input().split(' '))
c = int(input())
d = b + c
e = a + d //60

print('%s %s' % (e % 24, d % 60))
