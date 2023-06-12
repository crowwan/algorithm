function solution(n,a,b){
    // 라운드 수를 저장하는 변수
    // 승리 시 2로 나누었을 때 올림을 한 값으로 번호가 바뀐다.
    // 만약 A B가 서로 경쟁하는 수라면 해당 라운드를 리턴한다. -> A B를 나누고 올림 한 값이 같으면 경쟁하는 라운드
    // 확인하고 라운드를 증가를 해야 한다.
    
    let round = 1;
    
    while(true){
        if(Math.ceil(a/2) === Math.ceil(b/2)) return round;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        round++;
    }

    return round;
}