# 스택을 이용해서 만들 수 있는 경우 
# 없는 경우 -> 스택의 tod이 현재 출력해야하는 수보다 클 때
import sys
from collections import deque

tmp = sys.stdin.readline().split()

a = int(tmp[0])
b = int(tmp[1])

dq = deque([str(i) for i in range(1,a+1)])
res = []

while(len(dq)):
    dq.rotate(-b + 1)
    res.append(dq.popleft())
    
print('<' + ', '.join(res) + '>')


