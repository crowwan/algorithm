import sys

n = int(input())

for i in range(n):
    string = sys.stdin.readline().rstrip()
    isEmpty = 'YES'
    stack = list()
    for token in string:
        if token == ')':
            if len(stack):
                stack.pop()
            else:
                isEmpty = 'NO'
                break
            # pop
            # if stack len <= 0: No
        else:
            stack.append(token)
            # push
    if len(stack) > 0:
        isEmpty = 'NO'
    print(isEmpty)