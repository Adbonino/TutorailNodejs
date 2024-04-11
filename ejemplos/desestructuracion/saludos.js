function saludar(nombre){
    return `Hola, ${nombre}`
  }

function saludarHolaMundo(){
    return 'Hola mundo'
  }  

// console.log(module.exports);
// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;
// console.log(module.exports);

// Otra forma
module.exports = {
  saludar : saludar,
  saludarHolaMundo: saludarHolaMundo   
};
