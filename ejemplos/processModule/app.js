// modulo process
// info sobre el pŕoceso de nodejs que se esta ejecutando

// console.log(process);
// console.log(process.env);

// nos permite acceder a los argumentos qeu se pasan en el terminal
// ejemplo node app.js arg1 arg2

console.log(process.argv);
console.log(process.argv[1]);

for (let i = 2;i < process.argv.length ; i++){
  console.log(process.argv[i]);
};

console.log(process.memoryUsage());

