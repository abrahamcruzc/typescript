function arrayManipulation(n: number, queries: number[][]): number {
  let arr: number[] = new Array(n + 1).fill(0);

  for (let i = 0; i < queries.length; i++) {
    let a = queries[i][0];
    let b = queries[i][1];
    let k = queries[i][2];

    arr[a - 1] += k;
    if (b < n) {
      arr[b] -= k;
    }
    console.log(arr)
  }

  let maxValue = Number.MIN_SAFE_INTEGER;
  let current = 0;

  for (let i = 0; i < n; i++) {
    current += arr[i];
    if (current > maxValue) {
      maxValue = current;
    }
  }
  console.log(arr)

  return maxValue;
}

let n = 10;
let queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

console.log(arrayManipulation(n, queries));
