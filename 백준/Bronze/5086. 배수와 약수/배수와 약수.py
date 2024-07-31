while True:
    n1,n2=map(int,input().split())

    if n1==0 and n2==0:
        break
    elif n2%n1==0:#약수인 경우
        print('factor')
    elif n1%n2==0: #배수인 경우
        print('multiple')
    else:#둘 다 아닌 경우
        print('neither')