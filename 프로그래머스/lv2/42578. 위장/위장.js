function solution(clothes) {
    const map = clothes.reduce((a,b) => (!a[b[1]] &&(a[b[1]] = []), a[b[1]].push(b[0]),a),{})
    console.log(map)
    return Object.values(map).reduce((a,b) => a * (b.length+1),1) -1
}