const http = require('http');

// servidor basico
// rqe y res representa el requetsr  y la respuesta.
const servidor = http.createServer((req,res)=>{
	// envia la respuesta al cliente
	//res.end('Hola mundo');

	console.log('===> req (solicitud)');
	console.log(req.url);	
	console.log(req.method);
	console.log(req.headers);

	console.log('===> res (respuesta)');
	console.log(res.statusCode);
	// por defecto es el 200 pero puedo cambairlo.
	res.statusCode = 404;

	// configurar la cabecera
	res.setHeader('content-type','application/json');
	console.log(res.getHeader);

});

const puerto = 3000;

servidor.listen(puerto,() => {
	console.log('El servidor esta escuchando...')
});