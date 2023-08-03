time = list(map(int, input().split()))

h = time[0]

m = time[1]

if m - 45 < 0:
    prt_h = h-1
    if prt_h == -1:
        prt_h = 23
    prt_m = 60 - abs(m-45)
else:
    prt_h = h
    prt_m = abs(m-45)


print(prt_h,prt_m)