function excute(param1, param2) {
    var a = 1, b = 2;
    function func() {
        return a+b;
    }
    return param1 + param2 + func();
}

excute(3, 4);