def solution(food):
    res = []
    ans = ''
    for i in range(1,len(food)):
        res.append(str(i) * (food[i] // 2))
    
    ans += ''.join(res)
    res.reverse()
    
    return ans + '0' + ''.join(res)
        
