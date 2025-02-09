function arrayManipulation(n, queries) {
    var arr = new Array(n).fill(0);
    for (var i = 0; i < queries.length; i++) {
        var a = queries[i][0];
        var b = queries[i][1];
        var k = queries[i][2];
        arr[a - 1] += k;
        if (b < n) {
            arr[b] -= k;
        }
    }
    var maxValue = Number.MIN_SAFE_INTEGER;
    var current = 0;
    for (var i = 0; i < n; i++) {
        current += arr[i];
        if (current > maxValue) {
            maxValue = current;
        }
    }
    return maxValue;
}
var n = 10;
var queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
];
console.log(arrayManipulation(n, queries));
