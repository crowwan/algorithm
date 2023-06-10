const decToBi = (num,n) => {
    let bi = num.toString(2);
    const len = bi.length
    if(len < n) {
        for(let i = 0 ; i < n - len;i++){
            bi = '0' + bi;
        }
    }
    
    return bi;
}
function solution(n, arr1, arr2) {
    // arr1, arr2를 각 원소를 순회한다.
    // 같은 위치에 있는 원소를 이진수로 변환한다.
    // 해당 이진수를 비교하여 새로운 이진수를 만든다 -> 하나라도 1이면 1 -> 둘다 0 이면 0
    // 그 이진수를 통해서 벽과 공백을 만든다.
    const res = [];
    
    for(let i = 0 ; i < n ;i++){
        const bi1 = decToBi(arr1[i],n);
        const bi2 = decToBi(arr2[i],n);
        let tmp = '';
        
        for(let j = 0; j < n ; j++){
            if(bi1[j] === '1' || bi2[j] === '1') tmp += '#';
            else tmp += ' ';
        }    
        res.push(tmp);
    }
    return res;
}