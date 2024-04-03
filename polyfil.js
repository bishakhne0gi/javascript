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




//map
var arr = [1, 2, 3, 4, 5];
console.log("Original Array: ", arr);
var newArr = arr.map((currentValue, index, arr) => currentValue * 2);
console.log("Without Polyfill map: ", newArr);

Array.prototype.myMap = function (callback) {
    var myArr = [];
    for (var i = 0; i < this.length; i++) {
        myArr.push(callback(this[i], i, this));
    }

    return myArr;
}
var newArr2 = arr.myMap(currentValue => currentValue * 2);
console.log("With Polyfill map: ", newArr2);



//filter
var filterArray = arr.filter((currentValue, index, arr) => currentValue > 2);
console.log("Without Polyfill filter: ", filterArray);

Array.prototype.myFilter = function (callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}
var filterArray2 = arr.myFilter(currentValue => currentValue > 2);
console.log("With Polyfill filter: ", filterArray2);
