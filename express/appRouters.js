const express = require('express');
const   {infoCursos} = require('./cursos.js');

// creamos la app de express
const app = express();

// Routers
const routerProgramacion = express.Router();
app.use('/api/cursos/programacion',routerProgramacion);

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas',routerMatematicas);


// Routing
app.get('/',(req,res) => {
  res.send('Mi primer servidor 🙂');    
});

app.get('/api/cursos',(req,res) => {
  res.send(JSON.stringify(infoCursos));    
});

// app.get('/api/cursos/programacion',(req,res) => {
// Uso como camino base /api/cursos/programacion
routerProgramacion.get('/',(req,res) => {
  res.send(JSON.stringify(infoCursos.programacion));    
});

//app.get('/api/cursos/matematicas',(req,res) => {
routerMatematicas.get('/',(req,res) => {
  res.send(JSON.stringify(infoCursos.matematicas));    
});

// rutas con parametros URL
// voy a agregar parametos query para odernar por vistas
// app.get('/api/cursos/programacion/:lenguaje',(req,res) => {
routerProgramacion.get('/:lenguaje',(req,res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(cursos => cursos.lenguaje === lenguaje)
  
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


app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
   
  if (resultados.length === 0){
    return res.status(404).send('No se encontraron cursos de ese lenguaje y ese nivel');
  }
  
  res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/matematicas/:tema',(req,res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(cursos => cursos.tema === tema)
  
  if (resultados.length === 0){
    return res.status(404).send('No se encontraron cursos de ese tema');
  }
  
  res.send(JSON.stringify(resultados));
});




// si esta definido el valor del puero en el ambien lo tomo y sino usa el 3000
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log('el servidor esta escuchando...')
});