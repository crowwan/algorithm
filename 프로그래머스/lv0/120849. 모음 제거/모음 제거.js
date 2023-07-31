function solution(my_string) {
    const vowels = ['a','e','i','o','u'];
    const strArr = [...my_string];
    
    return strArr.filter((e)=>
        !vowels.includes(e)).join('');
}