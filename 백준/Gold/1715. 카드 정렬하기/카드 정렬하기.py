import heapq
import sys

heap = []
res = 0

n = int(sys.stdin.readline())

if(n == 1):
    print(0)
else:
    for i in range(n):
        heapq.heappush(heap,int(sys.stdin.readline()))
    
    while(len(heap) > 1):
        a = heapq.heappop(heap)
        b = heapq.heappop(heap)
        res += a + b
        heapq.heappush(heap,a+b)
    print(res)