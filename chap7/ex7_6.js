var fact = cacher({'0' : 1}, function (func, n) {
    return n * func(n-1);
});

var fibo = cacher({'0' : 0, '1' : 1}, function (func, n) {
    return func(n-1) + func(n-2);
});

console.log(fact(10));
console.log(fibo(10))