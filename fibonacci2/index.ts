function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error("n must be greater than 0")
  }
  
  let n2 = 0, n1 = 1;
  
  if (n === 0) return n2;
  if (n === 1) return n1;
  
  for (let i = 2; i <= n; i++) {
    const actual = n2 + n1;
    n2 = n1;
    n1 = actual;
  }
  
  return n1;
}

console.log(fibonacci(20))