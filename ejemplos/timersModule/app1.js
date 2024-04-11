// modulo timers
// temporizadores
// ejecutan codigo luego de un cierto periodo de tiempo

// setTimeout() => ejecuta codigo luego de un numero de milisegundos
// setTimeout(funcion,retraso,argumentos);  => setTimeout(funcion,retraso,arg1,arg2)
// argumentos: son los arg qeu se le van a pasar a la funcion

function mostrarTema(tema) {
  console.log(`Tema:  ${tema}`);
}

function sumar(a,b){
    console.log(a + b); 
}

// higher-order programming => estamos pasando una funcion como argumento a otra funcion
setTimeout(mostrarTema,5000,'Node.js');
setTimeout(sumar,3000,3,4);
console.log('mensaje');







