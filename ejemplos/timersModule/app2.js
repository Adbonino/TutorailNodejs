// setImmediate() => ejecuta codigo asincronico en la proxima iteracion del ciclo de eventos de node
// lo mas proximo posible
// setImmediate(funcion, argumentos)
// se ejecuta depsues de que todo el codigo sincrono se haya ejecutado

function mostrarTema(tema) {
    console.log(`Tema:  ${tema}`);
  }

setTimeout(mostrarTema,5000,'Matematicas');

// dentro de las tareas pendientes asincrono teine mayor prioridad
setImmediate(mostrarTema,'Node.js');

console.log('mensaje despues');

