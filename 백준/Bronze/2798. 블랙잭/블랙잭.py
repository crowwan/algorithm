n,m = map(int,input().split())
nums = list(map(int,input().split()))

SumOfThree = 0
for i in range(0,len(nums)-2):
    for j in range(i+1,len(nums)-1):
        for k in range(j+1,len(nums)):
            if nums[i]+nums[j]+nums[k] > m:
                continue
            else:
                SumOfThree = max(SumOfThree,nums[i]+nums[j]+nums[k])
print(SumOfThree)