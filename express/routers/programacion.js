
const express = require('express');
const routerProgramacion = express.Router();

const {programacion} = require('../datos/cursos.js').infoCursos;

// para manejar el body -- Midlleware
// se ejecutan depsues de recibir una solicitud y antes de enviar una respuesta
routerProgramacion.use(express.json());

/**
 * @swagger
 * /api/cursos/programacion:
 *   get:  
 *      summary: Muestra todos los cursos disponibles.
 *      produces:
 *          - application/json
 *      responses:
 *        200:
 *          type: json
 */

routerProgramacion.get('/',(req,res) => {
  res.send(JSON.stringify(programacion));    
});

/**
 * @swagger
 * /api/cursos/programacion/{lenguaje}:
 *   get:  
 *      summary: Muestra todos los cursos disponibles de un lenguaje de programacion.
 *      produces:
 *          - application/json
 *      parameters:
*          - in: path
*            name: lenguaje
*            description: Lenguaje por el cual filtrar
 *      responses:
 *        200:
 *          type: json
 *          description: devuelve el listado de cursos de rpogrmaacion del lengiaje seleccionado.
 */
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

 /**
 * @swagger
 * definitions:
 *  Curso:
 *   type: object
 *   properties:
 *      id:
 *         type: integer
 *      titulo:
 *          type: string
 *      lenguaje:
 *          type: string
 *      vistas:
 *           type: integer
 *      nivel:
 *          type: string
 * /api/cursos/programacion:
 *   post:  
 *      summary: Crear curso
 *      descripcion: Usar esta API para crea run nuevo curso
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: ad info
 *            schema: 
 *              $ref: '#/definitions/Curso'
 *      responses:
 *        201:
 *          description: Recurso Creado
 */ 
// Metodo POST
routerProgramacion.post('/',(req,res) => {
  // Asumimos que el formato del cuerpo es valido
  let cursoNuevo = req.body;
  // Agrego el curso
  programacion.push(cursoNuevo);
  // Envio el nuevo arreglo de cursos
  res.send(JSON.stringify(programacion));
});

/**
 *@swagger 
* /api/cursos/programacion/{id}:
*   put:  
*      summary: Modificar curso
*      descripcion: Usar esta API para modificar un curso
*      produces:
*          - application/json
*      parameters:
*          - in: path
*            name: id
*            description: id del curso de modificar
*          - in: body
*            name: ad info
*            schema: 
*              $ref: '#/definitions/Curso'
*      responses:
*        201:
*          description: Recurso Modificado
*/ 
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
/**
 *@swagger 
* /api/cursos/programacion/{id}:
*   delete:  
*      summary: Borrar  curso
*      descripcion: Usar esta API para borrar un curso
*      produces:
*          - application/json
*      parameters:
*          - in: path
*            name: id
*            description: id del curso de modificar
*      responses:
*        201:
*          description: Recurso Borrado
*/ 
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
  


