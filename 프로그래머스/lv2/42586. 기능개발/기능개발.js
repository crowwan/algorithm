function solution(progresses, speeds) {
    const res = [];
    let s = [];
    let c = 0;
    progresses.forEach((a,i) => {
        console.log(s);
        if(s.length === 0) {
            s.push(a);
            c = Math.ceil((100-a) / speeds[i]);
        }
        else if(Math.ceil((100-a) / speeds[i]) <= c) {
            s.push(a);
        }
        else {
            res.push(s.length);
            s = [];
            s.push(a);
            c = Math.ceil((100-a) / speeds[i]);
        }
    })
    res.push(s.length);
    return res;
}