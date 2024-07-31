n = int(input())

m = input()

a = 0
b = 0

for i in m:
    if i == 'A':
        a += 1
    else:
        b += 1
    
if a > b:
    print('A')
elif b > a:
    print('B')
else:
    print('Tie')