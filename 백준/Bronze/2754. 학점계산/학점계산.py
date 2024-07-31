a = input()

score = 0.0

if len(a) == 2:
    if a[0] == 'A':
        score = 4.0
    elif a[0] == 'B':
        score = 3.0
    elif a[0] == 'C':
        score = 2.0
    else:
        score = 1.0
    if a[1] == '+':
        score += 0.3
    elif a[1] == '-':
        score -= 0.3
    
print(score)
