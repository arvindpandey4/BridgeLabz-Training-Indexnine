/* call back practice */
function MyFunction(callback) {
    setTimeout(() => {
        const operation = "Operation Complete";
        callback(operation)
    }, 3000);
}

MyFunction(function(result) {
    console.log(result);
}
);

function MyPromiseFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const operation = "Promise Operation Complete";
            resolve(operation);
        }, 3000);
    })
};