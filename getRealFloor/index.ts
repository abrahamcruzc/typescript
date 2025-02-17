function getRealFloot(n: number): number[] {
  let arr = n.toString().split("").map(Number);
  return arr.reverse();
}
