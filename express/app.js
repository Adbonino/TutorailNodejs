const express = require('express');
const   {infoCursos} = require('./datos/cursos.js');

// creamos la app de express
const app = express();



// Routers

const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion',routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas',routerMatematicas);


// Routing
app.get('/',(req,res) => {
  res.send('Mi primer servidor 🙂');    
});

app.get('/api/cursos',(req,res) => {
  res.send(JSON.stringify(infoCursos));    
});

// si esta definido el valor del puero en el ambien lo tomo y sino usa el 3000
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log('el servidor esta escuchando...')
});