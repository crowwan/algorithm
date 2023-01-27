// const cal = (n1, op, n2) => op ==='+' ? n1 + n2 : n1 - n2;
// const isOper = (c) => a === '+' || a === '-';
// function solution(my_string) {
//     const nums = my_string.split(' ').filter(a => !isOper(a)).map(a => parseInt(a));
//     const ops = my_string.split(' ').filter(a => isOper(a));
    
//     return nums.reduce((a,b) => cal(a,ops.shift(),b));
// }



// const users = [
//     {name : 'a', age: 2},
//     {name : 'b', age: 3},
//     {name : 'c', age: 4},
//     {name : 'd', age: 5}
// ]
// users
//     .map(a => a.age)
//     .reduce((a,b) => a + b)

// [123, 4 ,5,66].reduce((a,b) =>);
// [+,-,+]

// 유하님
function solution(my_string) {
    let str = my_string.split(' ');
    let answer = Number(str[0]);
    
    for(let i=0; i <str.length; i++){
        // if(str[i] === '+'){
        //     answer = answer + Number(str[i+1])
        // }
        // if(str[i] === '-'){
        //     answer = answer - Number(str[i+1])
        // }
        switch(str[i]){
            case '+':
                answer = answer + Number(str[i+1])
                break;
            case '-':
                answer = answer - Number(str[i+1])
                break;
            default:
                break;
        }
    }
    return answer
}

// 윤수님
// function solution(my_string) {
//     return eval(my_string)
// }