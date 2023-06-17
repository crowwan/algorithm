from collections import deque

n = int(input())

for i in range(n):
    cmds = input()
    _ = int(input())
    str = input()
    dq = deque(str[1:len(str)-1].split(','))
    if dq[0] == '':
        dq = deque([])
    isReversed = False
    isError = False
    for cmd in cmds:
        if cmd == 'R':
            isReversed = not isReversed
        elif cmd == 'D':
            if len(dq) == 0 or  dq[0] == '':
                isError = True
                break
            if isReversed:
                dq.pop()
            else:
                dq.popleft()
            
    if(len(dq) and isReversed):
        dq.reverse()
    if isError:
        print('error')
    else: 
        print('['+','.join(list(dq))+']')
