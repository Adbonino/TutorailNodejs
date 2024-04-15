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

Documentacion de API con swagger

$ npm install swagger-ui-express
$ npm install swagger-jsdoc

https://www.npmjs.com/package/swagger-ui-express

https://medium.com/@italo.ravina/a%C3%B1adir-documentaci%C3%B3n-con-swagger-a-un-api-creada-en-express-5c4c5c3cb19e

https://www.google.com/search?q=express+ejempo+swaggwe.json&rlz=1C1GCEB_enAR1064AR1064&oq=express+ejempo+swaggwe.json&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAHSAQoxMTkzMmowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:90954cc7,vid:rIWGcxnVIA8,st:0

https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do

https://medium.com/@italo.ravina/a%C3%B1adir-documentaci%C3%B3n-con-swagger-a-un-api-creada-en-express-5c4c5c3cb19e