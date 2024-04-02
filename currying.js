let multiply = function (x, y) {
    console.log(x * y);
}
let multiplyBy2 = multiply.bind(this, 2)
multiplyBy2(5);