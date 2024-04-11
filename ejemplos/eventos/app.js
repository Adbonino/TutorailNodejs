// es una clase
const EventEmitter = require('events');

// Creamos una nueva clase de la instancia EventEmitter
const emisorProductos = new EventEmitter();

// cuando ocurra un evento compra hacer lo qeu dice la funcion Flecha
// a las funciones que manejan los eventos se las denominan events Hadlers
emisorProductos.on('compra', (total,numProductos) => {
    console.log(`Se realizo una compra por: $${total}`);
    console.log(`Numero de productos: ${numProductos}`);
});

emisorProductos.emit('compra', 500,3);
