const express = require('express');
const app =express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: ture}));

app.listen(port,()=>{
console.log("Server listening in http://localhost:5000")
})