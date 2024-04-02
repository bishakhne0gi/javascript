//function statement
function a() {
    console.log("a called");
}
a();
//function expression
var b = function () {
    console.log("b called");
}
b();

//anonymous function
var c = function () {
    console.log("c called");
}
c();
//named function expression
var d = function xyz() {
    console.log("d called");
}
d();
// xyz();error