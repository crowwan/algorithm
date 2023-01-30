function solution(numbers) {
    if(numbers.every(a => a === 0)) return '0'
    return numbers.map(a => a+'')
                  .sort((a,b) => (a+b > b+a) ? -1 : (a+b < b+a)  ? 1 : 0)
                  .join('');
}