const curso = require('./curso.json');

console.log(curso)
// automaticamente al importarlo con require lo comvierte a un objeto de java
console.log(typeof(curso))
console.log(curso.titulo)