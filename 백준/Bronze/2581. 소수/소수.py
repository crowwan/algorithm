m = int(input())
n = int(input())

def prime(i):
    if i == 1:
        return False
    elif i == 2:
        return True
    else:
        for j in range(2,i):
            if i%j== 0:
                return False
        return True
sum_of_primes = 0
first_ap = 0
for i in range(m,n+1):
    if prime(i) == True:
        sum_of_primes += i
        if first_ap == 0:
            first_ap = i
if first_ap == 0:
    print('-1')
else:
    print(sum_of_primes)
    print(first_ap)