# nodejs 

basado en el motor v8 de google (motor de java en el explorador)
Modulos built-in (incorporados o modulos core)
http - https - fd - os - path

https://www.freecodecamp.org/espanol/news/aprende-node-js-y-express-curso-desde-cero/

TIME: 2:10:39  - Introduccion a npm
repositorio de paquetes de java
    module: archivo o directorio qeu puede ser importado con require
    node_modules: 
    solo los modulos que contienen el archivo package.js es un paquete.
    Dependencias

    para instalar el paqeute uso:
    $ npm install paquete

    $ npm init --yes
        Se completa con todos los valores por defecto

    Crear un paquete con npm:
    $ npm init
        package name: (mi-paquete)
        version: (1.0.0)
        description: Mi primer paquete de Node.js
        entry potint: (index.js)     => punto de entrada al paquete
        test command:    
        git repository:
        keywords:
        author:
        licensece: (ISC)

Instalar y desintalar paquetes con npm

    npmjs.com
    $ npm install express
    Crea    node_modules   => modulos instalados
            packages-lock.json  => info sobre el paquite e info de los paquetes instalados

    podemos ver si esta instalado o no en dependencies en el archivo de package.json.

    $ npm uninstall express    => desintla el paquete

    Inatalar una version especifica de un paquete
    $ npm install express@4.15.1 

devDependencias  => dependencias que solo usamos cunaod desarrollamos la aplicacion

    $ npm intall express --save-dev
    en package.json ahora express aparece bajo la categoria devDependencies


TIME: 3:00:15 => Eventos en Node.js

PORMESAS: es un objeto que represneta el eventual resultado o error de una operaicon asincrona.
cuando hacemso una consulta a un servidor vamos a trabjaar con premesas poruqe no sabemnos cuando va a tardar en contestar el servidor.
Primer estado: pending
Segunfo estado: fulfilled(cumplida) o rejected(Rechazada)

Una promesa es un objeto de js. y se asocia a una callback Funcion => se ejecuta cunado se completa el proceso.

Las promesas tienen un metodo llamado then con el que podemos decidir qeu ocurre cunando se completa la promesa(exito o error).

.catch() solo se ejecuta si la promesa es rechazada

TIMER: 3:44:09 Encadenar promesas (async - await)

Protocolo HTTP:
Solicitudes (requets):
    - Metodo HTTP
    - Camino Path
    - Version HTTP
    - Headers
    - Body

Respuesta(response):
    - Codigo de estado
    - texto de estado
    - Verion HTTP
    - headers
    - body

Codios de estado:
    - 100-199 repuestas informativas
    - 200-299 repuestas satisfactorias
    - 300-399 redircciones
    - 400-499 Errores de los clientes
    - 500-599 Errores de los servidores

Ejemplos:
    200 OK => respuesta satisfactoria
    400 BAD REQUETS => el servidor no pudo interpretar la solicitud
    404 Not Found => el servidor no encuentra el recurso soliitado
    500 Internal Server Error => El servidor encontro una situacion qeu no sabe como resolvarla
    

TIMER: 4:35:03  => Tu primer servidor con Node.js

const http = require('http');

en visual studio es muy util instalar la extension REST CLIENT

TIMER: 5:10:08  =>  Estructura de una URL

https://www.freecodecamp.org/espanol

https => protocolo
www. => subdominio  (es para separar la info para distintos propositos)
freecodecamp => Dominio
org => dominio de nivel superior TLD
espanol => path

Parametros de ruta
https://www.freecodecamp.org/espanol/14

Parametros query
https://www.google.com/search?q=cursos+de+node

Varios parametors query
?q=cursos&sourceId=chrome&ie=UTF-8

son pares Clave:Valor

En Node hay modulo llamado URL que filtra todo esto

TIMER: 5:26:31  =>  Routing en Node.js

TIMER: 6:14:38  =>  Nodemon        Para poder hacer cambios en el servidor y no tener qeu reiniciarlo.
Reinicia la aplicacion de NODE cuando detecta algun cmabio en los archivos

$ npm install -g nodemon
-g lo instala como un comando global

Para instalarlo como una dependencia de desarrollo
$ npm install --save-dev nodemon

luego en vez de escribir:
$ node app.js
$ nodemon app.js

TIMER: 6:24:45  =>  Introduccion a Express

Es el framework mas popular de node
Nos permite desarrollar servidores muy facilmente.
Carasteristicas:
    - Routing
    - Enfocado en alto rendimiento
    - Nos permite desarrollar aplicaciones de Node.sj mas rapido.

Conceptos importantes:

    - CRUD: Create, Read, update; Delete    =>  metodos: POST, GET, PUT, DELETE

Las API No son usadas directamente por el usuario final

REST: estilo de aruitectura de software. REStFUll
Es una api basada en REST

EXPRESS

npm init
npm install express


