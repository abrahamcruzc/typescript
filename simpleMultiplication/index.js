function simpleMultiplication(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Number shoud be an integer");
    }
    return num % 2 === 0 ? num * 8 : num * 9;
}
var num = 1;
var result = simpleMultiplication(num);
console.log(result);
