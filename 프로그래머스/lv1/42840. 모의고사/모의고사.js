function solution(answers) {
    // 1,2,3번의 반복되는 찍기 방법을 찾는다.
    // 찍기 방법의 길이를 가지고 입력값의 인덱스를 나눈 나머지로 접근해서 정답을 확인한다.
    // 입력값을 순회하면서 진행한다.
    // 정답 배열에 맞춘 개수를 넣는다.
    // 순회가 끝난 후 정답 배열에서 최대값을 찾고 최대값과 같은 수포자를 배열에 넣는다.
    const f = [1,2,3,4,5];
    const s = [2, 1, 2, 3, 2, 4, 2, 5];
    const t = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const res = [0,0,0];
    
    answers.forEach((answer,answerInd) => {
        [f,s,t].forEach((arr, arrInd) => {
            arr[answerInd % arr.length] === answer && res[arrInd]++;
        })
    })
    
    const max = res.reduce((acc,cur) => acc <= cur ? cur : acc, 0);
    
    return res.reduce((acc,cur,i) => cur >= max ? [...acc,i+1] : acc,[]);
}