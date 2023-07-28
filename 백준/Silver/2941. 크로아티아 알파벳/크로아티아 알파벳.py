cro = ['c=','c-','dz=','d-','lj','nj','s=','z=']

st = input()

for t in cro:
    st = st.replace(t,'a')
print(len(st))