import sys

command_n = int(input())
stack = list()
for i in range(command_n):
    cmd = sys.stdin.readline().split()
    if cmd[0] == 'push':
        stack.append(int(cmd[1]))
    elif cmd[0] == 'pop':
        if len(stack):
            popped = stack.pop()
        else:
            popped = -1
        print(popped)
    elif cmd[0] == 'top':
        if len(stack):
            top = stack[-1]
        else:
            top = -1
        print(top)
    elif cmd[0] == 'size':
        size = len(stack)
        print(size)
    elif cmd[0] == 'empty':
        if len(stack) == 0:
            isEmpty = 1
        else:
            isEmpty = 0
        print(isEmpty)