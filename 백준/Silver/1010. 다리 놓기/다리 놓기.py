n = int(input())

fact = [0] * 31
fact[0] = 1
fact[1] = 1
fact[2] = 2

for i in range(3,31):
    fact[i] = fact[i-1] * i

for i in range(n):
    a,b = map(int,input().split())
    print(fact[b] // (fact[a] * fact[b-a]))
    