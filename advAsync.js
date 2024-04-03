const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Resolved")
    }, 3000)

})
const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Resolved")
    }, 5000)

})


const getData = () => {
    p.then(response => console.log(response))
    console.log("Before async/await");
}
getData()

//after async/await came to picture
const handlePromise = async () => {

    //JS will wait for the promise to resolve
    const val = await p;
    console.log(val);
    console.log("After async/await");

    const val2 = await p2;
    console.log(val2);
    console.log("After async/await");
}
handlePromise();