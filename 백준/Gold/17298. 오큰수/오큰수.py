import sys
from collections import deque

n = int(sys.stdin.readline())

dq = deque(list(map(int,sys.stdin.readline().split())))

stack = deque()

res = deque()

while(len(dq)):
    cur = dq.pop()
    while(len(stack)):
        if(stack[len(stack)-1] > cur):
            res.append(stack[len(stack)-1])
            break
        else:
            stack.pop()
    if(len(stack) == 0):
        res.append(-1)
    stack.append(cur)

res.reverse()
print(' '.join(list(map(str,res))))