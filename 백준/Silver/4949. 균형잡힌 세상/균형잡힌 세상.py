import sys

while True:
    string = sys.stdin.readline().rstrip()[0:-1]
    stack = list()
    isCorrect = 'yes'
    for token in string:
        if token == '(' or token == '[':
            stack.append(token)
        elif token == ')':
            if len(stack) == 0:
                isCorrect = 'no'
                break
            if stack[-1] == '(':
                stack.pop()
            else: 
                isCorrect = 'no'
                break
        elif token == ']':
            if len(stack) == 0:
                isCorrect = 'no'
                break
            if stack[-1] == '[':
                stack.pop()
            else: 
                isCorrect = 'no'
                break
    
    if string == '':
        break 
    if len(stack) > 0:
        isCorrect = 'no'
    print(isCorrect)    