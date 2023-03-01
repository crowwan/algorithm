function solution(phone_number) {
    return [...phone_number.slice(0,-4)].map(_ => '*').join('') + phone_number.slice(-4)
}

// const solution = n => [...n].fill("*",0,n.length-4).join("")