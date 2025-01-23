const products = { 
    1: { name: "Laptop", price: 1000, stock: 5 },
    2: { name: "Mouse", price: 20,stock: 10 },
    3: { name: "Keyboard", price: 50, stock: 0 },
};

function checkStock(productld, quantity) {
    let promesa = new Promise(function(resolve, reject) {
        const product = products[productld];
        if (product && product.stock >= quantity) {
            resolve(`Stock disponible para el producto ${productld}`);
        } else {
            reject(`Stock insuficiente para el producto ${productld}`);
        }
    });
    return promesa; 
}

function calculateTotal(productld, quantity) {
    let promesa = new Promise(function(resolve, reject) {
        const product = products[productld];
        if (product) {
            const precioTotal = product.price * quantity;
            resolve(`Total para ${quantity} unidades de ${productld}: ${precioTotal}`);
        } else {
            reject(`No se encontro el producto: ${productld}`);
        }
    });
    return promesa;  
}

function confirmOrder(productld) {
    let promesa = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(`Pedido confirmado para el producto ${productld}`);
        }, 2000);
    });
    return promesa; 
}

function simulateProcess(productld, quantity) {
    checkStock(productld, quantity)
    .then((respuesta) => {
        console.log(respuesta);
        return calculateTotal(productld, quantity);
    })
    .then((respuesta) => {
        console.log(respuesta);
        return confirmOrder(productld);
    })
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    })
}

simulateProcess(2, 6);
simulateProcess(3, 4);