def n_fac(n):
    
    if n <= 1:
        return 1
    else:
        return n*n_fac(n-1)
    
num = int(input())

print(n_fac(num))