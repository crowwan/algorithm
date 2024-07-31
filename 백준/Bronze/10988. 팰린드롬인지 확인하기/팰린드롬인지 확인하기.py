a = input()

length = len(a) // 2
res = 1
for i in range(length):
    if a[i] != a[len(a) - 1 - i]:
        res = 0
        break
print(res)
