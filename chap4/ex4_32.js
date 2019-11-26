function myFunction() {
    console.dir(arguments);

    //arguments.shift(); 에러 발생 (배열이 아니고 유사배열 객체이기 때문)

    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}

myFunction(1,2,3);