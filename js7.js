// function x() {

//     var a = 1;
//     setTimeout(() => {
//         console.log(a);
//     }, 1000)
//     console.log("neogi");
// }
// x();
// function x() {

//     for (let a = 1; a <= 5; a++) {
//         setTimeout(() => {
//             console.log(a);
//         }, a * 1000)
//     }

//     console.log("neogi");
// }
// x();
function x() {

    for (var a = 1; a <= 5; a++) {

        const close = (x) => {
            setTimeout(() => {
                console.log(x);
            }, x * 1000)
        }
        close(a);
    }

    console.log("neogi");
}
x();