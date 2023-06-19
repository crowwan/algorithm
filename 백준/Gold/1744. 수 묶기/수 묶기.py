import heapq

n = int(input())

list = [int(input()) for _ in range(n)]

max_heap = []
min_heap = []

for i in list:
    if(i > 0):
        heapq.heappush(max_heap,-i)
    else:
        heapq.heappush(min_heap,i)
    
res = []

while(len(max_heap) > 1):
    a = -heapq.heappop(max_heap)
    b = -heapq.heappop(max_heap)
    print
    if(a + b > a * b):
        res.append(a + b)
    else:
        res.append(a * b)

if(len(max_heap)):
    res.append(-heapq.heappop(max_heap))

while(len(min_heap) > 1):
    a = heapq.heappop(min_heap)
    b = heapq.heappop(min_heap)
    print
    if(a + b > a * b):
        res.append(a + b)
    else:
        res.append(a * b)

if(len(min_heap)):
    res.append(heapq.heappop(min_heap))
    
print(sum(res))