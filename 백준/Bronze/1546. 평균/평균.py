n = int(input())

score = list(map(float, input().split()))

max_s = max(score)

mani_score = [i/max_s*100 for i in score]
print(sum(mani_score)/len(mani_score))