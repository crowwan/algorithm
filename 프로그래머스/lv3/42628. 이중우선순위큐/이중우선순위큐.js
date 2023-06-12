function solution(operations) {
    const arr = [];
    for(let i = 0; i < operations.length; i++){
        const [c,n] = operations[i].split(' ');
        
        if(c === 'I'){
            arr.push(+n);
            arr.sort((a,b) => a - b);
        }else if(c === 'D'){
            if(n === '-1'){
                arr.shift();
            }else{
                arr.pop();
            }
        }
    }
    
    if(arr.length === 0) return [0,0];
    else if(arr.length === 1) return [arr[0],arr[0]];
    
    
    return [arr.pop(), arr.shift()];   
}