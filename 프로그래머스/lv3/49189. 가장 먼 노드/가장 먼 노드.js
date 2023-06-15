function solution(n, edge) {
    // 각 노드 간의 거리를 저장하는 배열을 만든다. -> 인덱스 + 1로 노드 번호 계산
    // bfs를 이용해서 노드 간의 거리를 계산한다. 현재까지 온 거리 + 1
    // bfs를 이용하기 때문에 해당 노드까지의 거리는 최소 거리다.
    // 방문했는지 여부는 거리가 0이 아닌지를 확인한다.
    // 가장 멀리 떨어져 있는 노드의 거리와 같은 거리의 노드들을 센다.
    
    const distances = new Array(n).fill(0);
    const q = [1];
    
    while(q.length){
        const from = q.shift();
        for(let i = 0; i < edge.length; i++){
            if(edge[i][0] === from){
                if(distances[edge[i][1]-1] === 0 || distances[edge[i][1]]-1 > distances[from-1] + 1){
                    q.push(edge[i][1]);
                    distances[edge[i][1]-1] = distances[from-1] + 1;
                }
            }else if(edge[i][1] === from){
                if(distances[edge[i][0]-1] === 0 || distances[edge[i][0]]-1 > distances[from-1] + 1){
                    q.push(edge[i][0]);
                    distances[edge[i][0]-1] = distances[from-1] + 1;
                }
            }
        }
    }
    distances[0] = 0;
    
    const max = Math.max(...distances);
    
    return distances.filter(a => a === max).length
    
}