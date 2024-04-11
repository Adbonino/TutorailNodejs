const express = require('express');
const routerProgramacion = express.Router();

const {programacion} = require('../datos/cursos.js').infoCursos;

// para manejar el body -- Midlleware
// se ejecutan depsues de recibir una solicitud y antes de enviar una respuesta
routerProgramacion.use(express.json());

routerProgramacion.get('/',(req,res) => {
  res.send(JSON.stringify(programacion));    
});

routerProgramacion.get('/:lenguaje',(req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(cursos => cursos.lenguaje === lenguaje)
    
    if (resultados.length === 0){
      return res.status(404).send('No se encontraron cursos de ese lenguaje');
    }
  
    // mostrar los parametros query
    // console.log(req.query.ordenar  ordenar seria el parametro);
  
    if (req.query.ordenar === 'vistas') {
      res.send(JSON.stringify(resultados.sort((a,b) => a.vistas - b.vistas)));
    } else {
      res.send(JSON.stringify(resultados));
    }
  });

routerProgramacion.get('/:lenguaje/:nivel',(req,res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
     
    if (resultados.length === 0){
      return res.status(404).send('No se encontraron cursos de ese lenguaje y ese nivel');
    }
    
    res.send(JSON.stringify(resultados));
  });

  // Metodo POST
  routerProgramacion.post('/',(req,res) => {
    // Asumimos que el formato del cuerpo es valido
    let cursoNuevo = req.body;
    // Agrego el curso
    programacion.push(cursoNuevo);
    // Envio el nuevo arreglo de cursos
    res.send(JSON.stringify(programacion));
  });


// Metodo PUT Actualizar una entidad => hay eque enviar la entidad completa
routerProgramacion.put('/:id',(req,res) => {
  // Asumimos que el formato del cuerpo es valido
  let cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0 ) {
      // Actualizar el curso
    programacion[indice] = cursoActualizado;
    // Envio el nuevo arreglo de cursos
    res.send(JSON.stringify(programacion));
  } 
});



// Metodo PATCH Solo paso los parametros a modificar
routerProgramacion.patch('/:id',(req,res) => {
  
  const infoActualizada = req.body;
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0 ) {
    const curosAModificar = programacion[indice];
    // solo modifico algunas propiedades de un objeto
    Object.assign(curosAModificar, infoActualizada);
  }
    // NO es necesrio convertirlo de JSON poruqe send lo hace automaticamente
    res.send(JSON.stringify(programacion)); 
});

// metodo DELETE

routerProgramacion.delete('/:id',(req,res) => {
  
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0 ) {
    // desde el indice solo contamos 1
    programacion.splice(indice, 1);
  }
    res.send(JSON.stringify(programacion)); 
});



  module.exports = routerProgramacion;
  


