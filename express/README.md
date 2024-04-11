# EXPRESS

TIMER: 7:15:33 => Parametros Query

TIMER: 7:22.32 => Routers en Express

Routers
Vamos a ver como separar los Routers en distintos archivos.

TIMER: 7:42:33 => POST, PUT, PACH y DELETE 
Recordar de asignarle codigo de estado a las respuestas

NO hace falta convertirlo de JSON con stringify poruqe send lo hace automaticamente.
res.send(JSON.stringify(programacion)); 

Sino podemos usar:
res.json(programacion);

Metodo end

res.status(404).end();  => termina la solicitud y envia una respuesta vacia.