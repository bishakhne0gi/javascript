const cart = ["product1", "product2", "product3"];


//producer end
const createOrder = (cart) => {

    const pr = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error("Invalid cart");
            reject(err)
        }
        const orderId = "ORD123";
        if (orderId) {

            setTimeout(() => {

                resolve(orderId);
            }, 3000)
        }
    })

    return pr;
}

const validateCart = (cart) => {
    return true;
}

const promise = createOrder(cart);

promise.then(
    (orderId) => {
        // proceedToPayment(orderId);
        console.log("Order created with orderId: ", orderId)
    }
)
    .catch((err) => {
        console.log(err.message);
    })
