function solution(chicken) {
    let c = chicken;
    let res = 0;
    
    while(c >= 10){
        res += Math.floor(c / 10);
        c = Math.floor(c / 10) + c % 10;
    }
    
    return res;
}

// 유하님
function solution(chicken) {
    
    //1,081
    let cupon = Math.floor(chicken / 10) + (chicken % 10)
    let 꼬꼬 = Math.floor(chicken / 10);
    
    while(cupon >= 10){
        꼬꼬 += Math.floor(cupon/10)
        cupon = Math.floor(cupon/10) + (cupon % 10)
    }
    return 꼬꼬;
}