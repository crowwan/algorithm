import heapq

q = []

tmp = list(map(int,input().split()))

n = tmp[0]
k = tmp[1]
bag = []
res = 0

for i in range(n):
    tmp = list(map(int,input().split()))
    heapq.heappush(q,tmp)


for i in range(k):
    bag.append(int(input()))
    
bag.sort()

tmp = []

for i in bag:
    while(len(q)):
        if q[0][0] <= i:
            heapq.heappush(tmp, -heapq.heappop(q)[1])
        else:
            break
    if(len(tmp)):
        res -= heapq.heappop(tmp)
    

print(res)
            