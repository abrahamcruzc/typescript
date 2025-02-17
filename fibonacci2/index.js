function fibonacci(n) {
    if (n < 0) {
        throw new Error("n must be greater than 0");
    }
    var n2 = 0, n1 = 1;
    if (n === 0)
        return n2;
    if (n === 1)
        return n1;
    for (var i = 2; i <= n; i++) {
        var actual = n2 + n1;
        n2 = n1;
        n1 = actual;
    }
    return n1;
}
console.log(fibonacci(20));
