## 더 깔끔한 방법

n = int(input())
cnt = 0
for i in range(n):
    li = input()
    check = True
    for j in range(len(li)-1):
        if li[j] == li[j+1]:
            pass
        elif li[j] in li[j+1:]:
            check = False
            break
    if check == True:
        cnt +=1
print(cnt)