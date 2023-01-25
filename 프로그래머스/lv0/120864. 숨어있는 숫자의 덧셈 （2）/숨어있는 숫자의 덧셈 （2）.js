function solution(my_string) {
    let res = 0;
    let w = '';
    for(const a of my_string){
        if(a.match(/[0-9]/)) w += a;
        else (res += +w, w ='')
    }
    w && (res += +w);
    return res;
}