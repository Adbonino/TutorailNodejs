// vamnos a trabajar con una variable

// lo definimos con un objeto de JS
let infoCurso = {
    "titulo": "node.js",
    "numVistas": 45642,
    "temas": [
        "JavaScripts",
        "https"
    ],
    "esPublico": true
}

console.log(typeof(infoCurso))

// lo vamos a pasar a json
let infoCursoJson = JSON.stringify(infoCurso);

console.log(infoCursoJson);
console.log(typeof infoCursoJson)


// lo vamos a pasar de JSON a un objeto de js
let infoCursoObjeto = JSON.parse(infoCursoJson);

console.log(infoCursoObjeto.temas);
console.log(typeof infoCursoObjeto)

