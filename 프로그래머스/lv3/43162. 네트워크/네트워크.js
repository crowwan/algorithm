function solution(n, computers) {
    // 방문 여부를 확인하는 배열을 만든다.
    // 새로운 네트워크를 생성해야 하는지 확인하는 변수를 만든다.
    // 방문 여부 배열을 순회하면서 방문 여부가 거짓이고 새로운 네트워크를 생성해야 한다면 
    // 네트워크 수를 증가하고 연결된 노드들을 순회하면서 방문 여부를 true로 바꾼다.
    // 제귀 함수를 이용한다.
    // 탈출 조건은 방문 여부가 true
    
    const isVisited = new Array(n).fill(false);
    let res = 0;
    
    const reCur = (cur, arr) => {
        if(isVisited[cur]) return;
        
        isVisited[cur] = true;
        
        for(let i = 0; i < arr.length; i++){
            if(i === cur || arr[i] === 0) continue;
            reCur(i,computers[i]);
        }
    }
    
    for(let i = 0; i < isVisited.length; i++){
        if(isVisited[i]) continue;
        reCur(i,computers[i]);
        res++;
    }
    
    return res;
}