function fibonacci(n) {
    if (n < 0) {
        throw new Error("N must be greater than 0");
    }
    var fib = [0, 1];
    if (n === 0)
        return fib[0];
    if (n === 1)
        return fib[1];
    for (var i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}
var n = 20;
console.log(fibonacci(n));
