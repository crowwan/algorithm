function solution(arr) {
    let min = arr[0];
    arr.forEach(a => {
       min = min < a ? min : a;
    });
    const newAr = arr.filter(a => a !== min);

    return newAr.length ? newAr : [-1];
}