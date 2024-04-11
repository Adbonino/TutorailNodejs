// Sistema de pedidos

// para sumular una falla del 20%
const estatusPedido = () => {
    // const estatus = Math.random() < 0.8;
    // console.log(estatus);
    return Math.random() < 0.8;
}

// for (let i = 0; i < 10; i++) {
//     console.log(estatusPedido());
// }

const miPedidoDePizza = new Promise((resolve,reject) => {
    setTimeout( () => {
        if (estatusPedido()){
            resolve('Pedido exitoso! Su pizza esta en camino');
        } else {
            reject('Ocurrio un error. Por favor intente nuevamente')
        }
    },3000);
});

const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido,rechazarPedido);

// otra sintaxis
 miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });

// otra sintaxis usando .catch()
// .then .catch se llama Method Chaining => Encadenar metodos
miPedidoDePizza
    .then((mensajeDeConfirmacion) => { 
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });

// otra forma
miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);

// otra forma
miPedidoDePizza
    .then(manejarPedido)
    .catch(manejarRechazo);