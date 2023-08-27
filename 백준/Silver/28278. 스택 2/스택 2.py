import sys
n = int(sys.stdin.readline())
stack = []

for i in range(n):
  li = list(map(int, sys.stdin.readline().split()))
  if(li[0] == 1):
    stack.append(li[1])
  elif(li[0] == 2):
    if(len(stack)):
      print(stack.pop())
    else:
      print(-1)
  elif(li[0] == 3):
    print(len(stack))
  elif(li[0] == 4):
    if(len(stack)):
      print(0)
    else:
      print(1)
  elif(li[0] == 5):
    if(len(stack)):
      print(stack[-1])
    else:
      print(-1)
      
  