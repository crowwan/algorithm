n = int(input())
m = int(input())
li = []
for i in range(m):
  a,b = map(int,input().split())
  li.append(a * b)
  
if n == sum(li):
  print('Yes')
else:
  print('No')
  
