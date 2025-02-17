function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error("N must be greater than 0");
  }

  let fib: number[] = [0, 1];
  
  if (n === 0) return fib[0];
  if (n === 1) return fib[1];
  
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}

let nValue = 20;
console.log(fibonacci(n));
