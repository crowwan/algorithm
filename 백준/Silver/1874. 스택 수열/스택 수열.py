# 스택을 이용해서 만들 수 있는 경우 
# 없는 경우 -> 스택의 tod이 현재 출력해야하는 수보다 클 때
import sys
from collections import deque

n = int(sys.stdin.readline())

li = [i for i in range(1,n+1)]
ind = 0
res = []
dq = deque([])
isEnd = False

for i in range(n):
    t = int(sys.stdin.readline())
    while(True):
        if(len(dq) == 0 or dq[len(dq) - 1] < t):
            dq.append(li[ind])
            res.append('+')
            ind += 1
        elif(dq[len(dq) - 1] == t):
            dq.pop()
            res.append('-')
            break
        elif(dq[len(dq) - 1] > t):
            print('NO')
            isEnd = True
            break
    if(isEnd):
        break
if(not isEnd):
    for i in res:
        print(i)