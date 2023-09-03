n = int(input())

li = [0] * 101
li[0] = 1
li[1] = 1
li[2] = 1

for j in range(3,101):
    li[j] = li[j-3] + li[j-2]
for i in range(n):
    a = int(input())
    print(li[a-1])
        