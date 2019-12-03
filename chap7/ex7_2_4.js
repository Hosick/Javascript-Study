var arr = [1, 2, 3, 4];

var sum = function (x, y) {
    return x+y;
};

var multiply = function (x, y) {
    return x*y;
};

console.log(reduce(sum, arr, 0));
console.log(reduce(multiply, arr, 1));