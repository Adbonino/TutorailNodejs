function ordenarProducto(producto){
    return new Promise((resolve,reject) => {
        console.log(`Hola, ${producto}`);
        setTimeout(()=> {
            if (producto === 'taza') {
                resolve('Ordenando Taza');
            } else {
                reject('producto no disponible');
            }
        },2000);
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve, reject) => {
        console.log(`procesando ${respuesta}`);
        console.log(`Hola, ${respuesta}`);
        setTimeout(() => {
            resolve('Gracias por tu compra');
        },4000);
    });
}

// voy a usar las funciones asincronica para qeu se hagan en un orden qeu yo deseo

// opcion 1
ordenarProducto('taza')
    .then(respuesta => {
        console.log('respuesta recibida')
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    });

