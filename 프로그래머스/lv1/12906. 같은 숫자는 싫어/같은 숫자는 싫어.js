function solution(arr){
    const stack = [];
    for(const a of arr){
        stack[stack.length-1]!== a && stack.push(a);
    }
    return stack
}