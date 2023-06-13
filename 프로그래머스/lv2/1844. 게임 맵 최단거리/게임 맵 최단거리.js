function solution(maps) {
    // bfs를 이용한다.
    // 처음 목적지에 도착하는 경우가 항상 최단 경로이다. -> 현재 위치에서 갈 수 있는 길을 큐에 넣고 확인하기 때문에 뒤쪽에 있는 경로는
    // 거리가 같거나 더 큰 경우 밖에 없다.
    // 큐를 이용해서 bfs를 구현한다.
    const q = [[0,0,1]];
    const [dx,dy] = [maps.length - 1, maps[0].length - 1];
    
    const isVisited = new Array(maps.length).fill(0).map(a => new Array(maps[0].length).fill(false));
    
    const dif = [[-1,0],[1,0],[0,-1],[0,1]];
    
    const checkIsValidPath = (a, limit) => {
        return a >= 0 && a <= limit;
    }
    while(q.length) {
        const cur = q.shift();
        
        if(!checkIsValidPath(cur[0],dx) || !checkIsValidPath(cur[1],dy)) continue;
        if(maps[cur[0]][cur[1]] === 0) continue;
        
        if(cur[0] === dx && cur[1] === dy) return cur[2];
        
        maps[cur[0]][cur[1]] = 0; 
        for(const [a,b] of dif){
            q.push([cur[0]+a,cur[1]+b,cur[2]+1]);
        }
    }
    return -1;
}