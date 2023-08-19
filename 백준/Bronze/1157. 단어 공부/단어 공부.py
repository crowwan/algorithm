n = input().upper() # 입력받고 모두 대문자로

t = [] # 각 문자의 갯수를 저장할 리스트

for i in set(n): # 각 문자를 한 개씩만 돈다.
    t.append(n.count(i)) # 각 문자의 갯수
ind = [i for i,x in enumerate(t) if x == max(t)]# 각 갯수 중 최댓값의의 인덱스를 저장하는 리스트
if len(ind) > 1 : 
    print('?')
else:
    print(list(set(n))[ind[0]])