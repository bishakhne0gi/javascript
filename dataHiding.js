// var counter = 0;

// function add() {
//     counter += 1;
// }

// console.log(counter);

function a() {

    var counter = 0;

    return function add() {
        counter += 1;
        console.log(counter);
    }
}
var print = a();
var print2 = a();
print();
print();

print2();