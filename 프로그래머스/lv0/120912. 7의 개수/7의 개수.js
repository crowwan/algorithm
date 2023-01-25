function solution(array) {
    let res = 0;
    array.forEach(a => {
        res += [...a+''].filter(b => b==='7').length;
    })
    return res;
}