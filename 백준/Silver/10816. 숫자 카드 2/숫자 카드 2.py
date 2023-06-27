n = int(input())
cards = list(map(int,input().split()))
m = int(input())
numbers = list(map(int,input().split()))

counts = {key: 0 for key in set(cards[:])}

for i in cards:
    counts[i] += 1

for i in numbers:
    if i in counts.keys():
        print(counts[i], end=' ')
    else:
        print('0', end=' ')