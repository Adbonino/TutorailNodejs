const express = require('express');
const routerMatematicas = express.Router();

const {matematicas} = require('../datos/cursos.js').infoCursos;

routerMatematicas.get('/:tema',(req,res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter(cursos => cursos.tema === tema)
  
  if (resultados.length === 0){
    return res.status(404).send('No se encontraron cursos de ese tema');
  }
  
  res.send(JSON.stringify(resultados));
});

routerMatematicas.get('/',(req,res) => {
    res.send(JSON.stringify(matematicas));    
  });
  
module.exports = routerMatematicas;
