n = int(input())

res = 0
for _ in range(n):
    a = int(input())
    if a == 1:
        res += 1
    else:
        res -= 1

if res > 0:
    print("Junhee is cute!")
else:
    print("Junhee is not cute!")