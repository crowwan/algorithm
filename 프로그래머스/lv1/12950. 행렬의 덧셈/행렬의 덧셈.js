function solution(arr1, arr2) {
    return arr1.map((a,i) => a.map((e,j) => e + arr2[i][j]))
}