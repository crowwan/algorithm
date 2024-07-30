MAP = { '@' : 3, '%' : 5, '#' : 7 }
n = int(input())
for i in range(n):
    a = input().split(' ')
    res = 0
    for j in a:
        if j == '@':
            res = res * 3
        elif j == '%':
            res = res + 5
        elif j == '#':
            res = res - 7
        else:
            res = res + float(j)
    print(format(res, ".2f"))
