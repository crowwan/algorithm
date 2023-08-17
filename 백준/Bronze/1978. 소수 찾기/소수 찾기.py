n = int(input())

st = list(map(int,input().split()))

cnt = 0

for i in st:
    if i == 1:
        pass
    elif i == 2:
        cnt+=1
    else:
        is_prime = True
        for j in range(2,i):
            if i%j == 0:
                is_prime = False
                break
        if is_prime == True:
            cnt+=1
print(cnt)