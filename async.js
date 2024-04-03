// const p = new Promise((resolve, reject) => {
//     resolve("Resolved")
// })

// const getData = () => {
//     return p;
// }

// getData().then(response => console.log(response))

//Before async/await
const p = new Promise((resolve, reject) => {
    resolve("Resolved")
})

const getData = () => {
    p.then(response => console.log(response))
}

getData();



//with async/await
const handlePromise = async () => {
    const val = await p;
    console.log(val);
}
handlePromise();