def solution(elements):
    res = set()

    n = elements
    for i in range(len(n)):
        for j in range(len(n)):
            if(len(n) - (j+i+1) < 0):
                tmp = n[j:j+i+1]
                tmp.extend( n[0:abs(len(n) - (j+i+1))])
                res.add(sum(tmp))
            else:
                res.add(sum(n[j:j+i+1]))

    return len(res)
    