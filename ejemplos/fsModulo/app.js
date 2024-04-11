// modulo fs => sistema de archivos
// trabajo con archivos
// todos los metodos de este modulo son asincronos por defecto
// no bloquean la ejecucion del programa

// si los deseo sincronos puedo usar las versiona sincronasagragnado Sync a sus monbres
// fs.rename() => fs.renameSync()


// NOTA:    si ejecuta todas las funciones juntas no se en qeu orden se van a ejecutar
//          pues son sincronas
//          Si quiero que se ejecuten en el orden escrito debo usar las versiones 
//          Sync de las funciones y no necesitamos las funciones CallBacks

const fs = require('fs');

fs.readFile('index.html','utf-8',(err,contenido) =>{
    if (err) {
        console.log(err);
        // throw err; => detiene la ejecucion de la funcion y nos da datos del error
    } else {
        console.log(contenido);
    }
});

fs.rename('index.html','main.html',(err) => {
    if (err){
        throw err;
    }
    console.log('Nombre modificado exitosamente');
});

// agregar contenido al final de un archivo
fs.appendFile('index.html','<p>Hola</>', () => {
    if (err){
        throw err;
    }
    console.log('Archivo actualizado');
});

// Reemplazar todpo el contenido del archivo
fs.writeFile('index.html','Contenido Nuevo', () => {
    if (err){
        throw err;
    }
    console.log('Contendio reemplazado');
});

// Eliminar archivo
fs.unlink('main.html', () => {
    if (err){
        throw err;
    }
    console.log('Archivo eliminado');
});


