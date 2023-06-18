from collections import deque

def isValidBrackets(ar):
    brackets = {
        '[':']',
        '(':')',
        '{':'}',
    }
    
    stack = []
    
    for i in ar:
        if(i in brackets):
            stack.append(i)
        else:
            if(len(stack) == 0 or brackets[stack.pop()] != i):
                return False
    if(len(stack)):
        return False
    return True
    

def solution(s):
    dq = deque(s)
    res = 0
    for i in range(len(s)):
        if(isValidBrackets(dq)): res += 1
        dq.rotate(-1)
    return res
    