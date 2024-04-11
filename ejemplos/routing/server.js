// routing
// Manejar las solicitudes del cliente mediaten el metodo y el camino

// Metodo: GET POST PUT DELETE PUT , etc...

// el manejo de rutas es mas facil con express

const http = require('http');
const cursos = require('./cursos');


const servidor = http.createServer((req,res)=>{
    const {method} = req;

    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            return res.end('El metodo usado no puede ser manejado por el servidor.');
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;

    if (path === '/'){
        res.writeHead(200, {'Content-type': 'Application/json' })
        return res.end('Bienvenidos a mi primer servidor y API creados con NODE.js');
    } else if (path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }  else if (path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }

    res.statusCode = 404;
    res.end('El recurso solicitado no existe.')
}

function manejarSolicitudPOST(req,res) {
    const path = req.url;

    if (path === '/cursos/programacion'){

        let cuerpo = '';
        // Vamos a trabajr con eventos
        // usmoas el evento data qeu es cunaod se reciben datos
        // mientras se reciba datos los agrego a la varible cuerpo
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        // cuanod se termina de recibir la informacion la proceso
        req.on('end', () => {
           
            // console.log(cuerpo);

            // lo conviert a un objeto de JavaScritp
            cuerpo = JSON.parse(cuerpo);

            return res.end('El servidor recibio una solicitud POST'); 
        });

        // return res.end('El servidor recibio una solicitud POST');        
    }
}



const puerto = 3000;

servidor.listen(puerto,() => {
	console.log('El servidor esta escuchando...')
});
