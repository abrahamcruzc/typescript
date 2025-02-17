function simpleMultiplication(num: number): number {
  if (!Number.isInteger(num)) {
    throw new Error("Number shoud be an integer");
  }
  return num % 2 === 0 ? num * 8 : num * 9;
}

let num = 1;
let result = simpleMultiplication(num);
console.log(result);