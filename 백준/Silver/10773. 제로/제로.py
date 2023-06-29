import sys

n = int(input())

stack = list()

for i in range(n):
    number = int(sys.stdin.readline())
    if number == 0:
        # pop
        stack.pop()
    else:
        stack.append(number)
        # push
# sum of stack
print(sum(stack))