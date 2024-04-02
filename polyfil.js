let desc = {
    firstName: "Bishakh",
    lastName: "Neogi",
}

let printDesc = function (place, state) {
    console.log(this.firstName + " " + this.lastName + " " + place + " " + state);
}
let printBind = printDesc.bind(desc, "Kolkata");
printBind("West Bengal");


Function.prototype.myBind = function (...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}
let printBind2 = printDesc.myBind(desc, "Kolkata");
printBind2("Noida")

