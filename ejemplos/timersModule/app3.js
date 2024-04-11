// setInterval()  => ejecuta codogp infinito numero de veces co un retraso en milisegundos
// setInterval(funcion,intervalo,argumentos)

function mostrarTema(tema) {
    console.log(`Tema:  ${tema}`);
  }

setInterval(mostrarTema,3000,'Matematicas');
