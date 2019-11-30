var person = function (arg) {
    var name = undefined;

    return{
        _init : function (arg) {
            name = arg ? arg : "zzoon";
        },
        getName : function () {
            return name;
        },
        setName : function (arg) {
            name = arg;
        }
    };
}

Person = subClass(person());
var iamhjoo = new Person("iamhjoo");
console.log(iamhjoo.getName());

Student = Person.subClass();
var student = new Student("student");
console.log(student.getName());