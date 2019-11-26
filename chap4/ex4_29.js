var foo = {
    name : 'foo',
    age : 30,
    gender : 'man'
};

console.dir(foo);

var Person = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person('bar', 33, 'woman');
console.dir(bar);

var baz = new Person('baz', 25, 'woman');
console.dir(baz);