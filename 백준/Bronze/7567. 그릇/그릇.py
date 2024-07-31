a = input()

prev = ''
res = 0
for i in a:
    if prev == i:
        res += 5
    else:
        res += 10
    prev = i
print(res)