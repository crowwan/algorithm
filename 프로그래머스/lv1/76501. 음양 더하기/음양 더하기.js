function solution(absolutes, signs) {
    return absolutes.reduce((a,b,i) => signs[i] ? a + b : a - b,0);
}