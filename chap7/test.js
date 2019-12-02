function a(mode){
    var funcs = {
        'plus': function(left,right){return left+right;},
        'minus': function(left,right){return left-right;}
    }
    return funcs[mode];
}

console.log(a('plus')(1,2));
console.log(a('minus')(2,1));