function solution(s){
    return [...s].reduce((a,b) => {
        if(!a.length || a[a.length-1] !== b) a.push(b);
        else if(a[a.length-1] === b) a.pop();
        return a;
    },[]).length > 0 ? 0 : 1;
    

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}