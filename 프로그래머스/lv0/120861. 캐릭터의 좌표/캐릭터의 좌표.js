function solution(keyinput, board) {
    const max = [parseInt(board[0]/2),parseInt(board[1]/2)];
    const keyMap = {
        left : [-1,0],
        right : [1,0],
        up : [0,1],
        down : [0,-1],
    }
    let x = 0;
    let y = 0;
    for(const a of keyinput){
        const [v,h] = keyMap[a];
        [nx,ny] = [x+v,y+h];
        if(Math.abs(nx) <= max[0] && Math.abs(ny) <= max[1]) {
            x = nx;
            y = ny;
        }
    }
    return [x,y];
}
