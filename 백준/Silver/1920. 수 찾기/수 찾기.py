n = int(input())
ar = list(map(int,input().split()))
m = int(input())
tmp = list(map(int,input().split()))

dic = {i : True for i in ar}

for i in tmp:
    if(dic.get(i) != None):
        print(1)
    else:
        print(0)