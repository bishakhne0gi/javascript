let desc = {
    firstName: "Bishakh",
    lastName: "Neogi",

}
let printDesc = function (hi, hello) {
    console.log(this.firstName + " " + this.lastName + " " + hi + " " + hello);
}
printDesc.call(desc, "Hi", "Hello");

let desc2 = {
    firstName: "Irshit",
    lastName: "Ghosh",

}

//function borrowing
printDesc.call(desc2, "Hi", "Helloww");

printDesc.apply(desc2, ["Hi", "Hello"]);

let bindMethod = printDesc.bind(desc, "This", "Bind");
console.log(bindMethod);
bindMethod();
