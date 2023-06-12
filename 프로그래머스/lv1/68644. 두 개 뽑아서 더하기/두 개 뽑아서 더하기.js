function solution(numbers) {
    // numbers 에서 2개씩 골라서 더한 값을 set에 저장 -> 중복 제거를 위함 마지막에 배열로 변환 후 정렬해야할 듯
    // 이미 고른 조합은 다시 확인하지 않는 게 효율성 측면에서 좋음 -> 이미 계산이 되었다면 뒤에서 다시 계산할 필요가 없으므로 제거 -> pop()
    const sums = new Set();
    while(numbers.length){
        const tail = numbers.pop();
        for(let i = 0; i < numbers.length; i++){
            sums.add(tail + numbers[i]);
        }        
    }
    
    return Array.from(sums).sort((a,b) => a - b);
    
}