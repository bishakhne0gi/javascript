setTimeout(() => {
    console.log("timer");
}, 5000)

function x(y) {
    console.log("x");
    y();
}

//y is a callback function
x(function y() {
    console.log("y");
})

function attachEventListener() {
    var counter = 0;


    //callback function here is forming closure with outer scope
    document.getElementById("click").addEventListener(
        "click", function xyz() {
            console.log(++counter);
        }
    )
}
attachEventListener();