function solution(begin, target, words) {
    // bfs를 이용해서 푼다.
    // 현재 단어와 글자 차이가 1인 단어를 큐에 넣는다. (차이가 1인지 아닌지 비교하는 함수 필요)
    // 큐에서 하나씩 빼고 계속 비교한다. 다시 돌아가는 일은 없어야 하므로 뺼 때마다 words에서 제거한다.
    // 만약 큐가 비었는데 결과가 target과 다른다면 0을 리턴한다.
    // 각 작업에 횟수를 같이 넘겨준다.
    const q = [[begin,0]];
    
    const checkIsNextWord = (a,b) => {
        let cnt = 0;
        for(let i = 0 ; i < a.length ;i++){
            if(a[i] !== b[i]) cnt++;
        }
        return cnt === 1;
    }
    
    while(q.length) {
        const [word,cnt] = q.shift();
        if(word === target) return cnt;
        for(let i = 0; i < words.length;i++){
            if(checkIsNextWord(word,words[i])){
                q.push([words[i],cnt+1]);
                words.splice(i,1);
            }
        }
    }
    return 0;
}