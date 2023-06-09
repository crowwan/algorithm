const getBiggerSize = (ar1, ar2) => 
    [ar1[0] > ar2[0] ? ar1[0] : ar2[0], ar1[1] > ar2[1] ? ar1[1] : ar2[1]];

const arrMultiply = (arr) => arr.reduce((a,c) => a * c);

function solution(sizes) {
    return arrMultiply(sizes.reduce((acc,cur) => {
        if(arrMultiply(acc) === 0) return cur;
        const a = getBiggerSize(acc, cur);
        const b = getBiggerSize(acc, [cur[1],cur[0]]);
        if(arrMultiply(a) < arrMultiply(b)) return a;
        else return b;
    },[0,0]));
}