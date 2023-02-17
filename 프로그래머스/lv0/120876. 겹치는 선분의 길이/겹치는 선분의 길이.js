function solution(lines) {
  const ar = lines.reduce((e, [a, b]) => {
    for (let i = a + 1; i <= b; i++) e[i] = ++e[i] || 1;
    return e;
  }, {});

  return Object.values(ar).filter(e => e > 1).length;
}