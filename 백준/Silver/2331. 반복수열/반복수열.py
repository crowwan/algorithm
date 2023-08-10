a, p = map(int,input().split())

d = [a]

while True:
  tmp = 0
  for s in str(d[-1]):
    tmp += int(s) ** p
  if tmp in d:
    break
  d.append(tmp)
  
print(d.index(tmp))