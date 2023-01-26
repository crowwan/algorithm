function solution(s){
    const stack = [];
    for(const a of s){
        if(a === '(') stack.push(a);
        else if(stack.length) stack.pop();
        else return false;
    }
    

    return stack.length === 0;
}