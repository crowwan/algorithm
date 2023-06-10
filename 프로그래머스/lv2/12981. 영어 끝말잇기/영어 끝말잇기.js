const checkIsValidWord = (prev, word) => {
    if(prev === '') return true;
    return prev[prev.length-1] === word[0];
}
function solution(n, words) {
    // 단어를 하나씩 해시 테이블에 추가한다.
    // 만약 현재 단어가 해시 테이블에 있다면 해당 사람은 틀린 것
    // n으로 인덱스를 나눈다. -> 몫이 몇 번째인지 -> 나머지가 누구인지
    const occured = {};
    const res = [0,0];
    let prev = '';
    
    for( let i = 0 ;i < words.length; i++){
        const word = words[i];
        if(occured[word] || !checkIsValidWord(prev,word))  {
            res[0] = i % n + 1;
            res[1] = Math.floor(i / n) + 1;
            break;
        }
        prev = word;
        occured[word] = true;
    }
    
    return res;
}