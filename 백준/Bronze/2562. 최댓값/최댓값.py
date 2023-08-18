li = []

for i in range(9):
    a = int(input())
    li.append(a)

li_max = max(li)

index = li.index(li_max)+1

print(li_max)
print(index)