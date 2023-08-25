s = set([])
for i in range(10):
    n = int(input())
    s.update([n%42])

print(len(s))