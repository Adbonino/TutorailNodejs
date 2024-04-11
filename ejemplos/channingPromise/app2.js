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

// opcion 2
async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        const repuesteProcesada = procesarPedido(respuesta);
        console.log('respuesta Procesada');
    } catch (error){
        console.log(error);
    }
}

realizarPedido('taza');
realizarPedido('jarron');