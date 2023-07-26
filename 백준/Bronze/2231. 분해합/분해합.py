n = int(input())

i_sum = 0
for i in range(1,n):
    sep = list(map(int,str(i)))
    i_sum = i+sum(sep)
    if i_sum == n:
        i_sum = i
        break
    else:
        i_sum = 0
print(i_sum)