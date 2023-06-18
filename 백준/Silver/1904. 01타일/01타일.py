import sys
n = int(sys.stdin.readline())

li = [i for i in range(n+1)]

li[0]=1
li[1]=1

for i in range(2,n+1):
    li[i] = li[i-1] % 15746 + li[i-2] % 15746
    
print(li[n] % 15746)