function solution(k, room_number) {
    const roomMap = new Map();
    
    return room_number.map((a) => {
        if(!roomMap.get(a)) {
            roomMap.set(a,a+1);
            return a;
        }
        else{
            let next = roomMap.get(a);
            while(roomMap.get(next)){
                roomMap.get(roomMap.get(next)) && roomMap.set(next,roomMap.get(roomMap.get(next)));
                next = roomMap.get(next); 
            }
            roomMap.set(a,next + 1);
            roomMap.set(next, next + 1);
            return next;
        }
    });
}