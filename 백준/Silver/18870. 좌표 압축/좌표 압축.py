import sys
n = int(sys.stdin.readline())

a = list(map(int,sys.stdin.readline().split()))
b = a[:]
a_set = list(set(b))
a_set.sort()

li = {a_set[0] : 0}

for i in range(1,len(a_set)):
    li[a_set[i]] = li[a_set[i-1]] + 1

for j in a:
    print(li[j],end=' ')