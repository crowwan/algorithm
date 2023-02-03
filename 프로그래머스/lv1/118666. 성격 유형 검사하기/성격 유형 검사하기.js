function solution(survey, choices) {
    const obj = {
        R:0,
        T:0,
        C:0,
        F:0,
        J:0,
        M:0,
        A:0,
        N:0,
    }
    survey.forEach((a,i) => {
        if(choices[i] < 4){
            obj[a[0]] += 4 - choices[i]
        }else if(choices[i] > 4){
            obj[a[1]] += choices[i] - 4;
        }
    });
    const keys = Object.keys(obj);
    let res = ''
    console.log(obj);
    for(let i = 0; i< keys.length; i+=2){
        if(obj[keys[i]] >= obj[keys[i+1]]){
            res += keys[i];
        }else{
            res += keys[i+1];
        }
    }
    return res;
}