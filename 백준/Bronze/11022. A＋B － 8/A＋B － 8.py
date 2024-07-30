a = int(input())

for i in range(a):
    [b,c] = map(int, input().split(' '))
    print('Case #' + str(i + 1) + ': ' + '%s + %s = %s' % (b, c,b + c))
    