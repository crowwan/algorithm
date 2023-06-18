import sys
ops = ['+','-','*','/']

n = int(sys.stdin.readline())

nums = list(map(int,sys.stdin.readline().split()))

ops_count = list(map(int,sys.stdin.readline().split()))

max = float('-inf')
min = float('inf')

ops_str = ''

for i in range(4):
    ops_str += ops[i] * ops_count[i]

def calc(prev,i,j):
    if(ops_str[i] == '+'):
        return prev + nums[j]
    if(ops_str[i] == '-'):
        return prev - nums[j]
    if(ops_str[i] == '*'):
        return prev * nums[j]
    if(ops_str[i] == '/'):
        if(prev < 0 and nums[j] > 0):
            prev = abs(prev)
            prev //= nums[j]
            prev *= -1
            return prev
        else:
            return prev // nums[j]

def dfs(prev,j,q):
    if(len(q) == len(ops_str)):
        global max, min
        if(prev > max):
            max = prev
        if(prev < min):
            min = prev
        return
    for i in range(len(ops_str)):
        if( i in q ):
            continue
        else:
            q.append(i)
            dfs(calc(prev,i,j),j+1,q[:])
            q.pop()

dfs(nums[0],1,[])

print(max)
print(min)