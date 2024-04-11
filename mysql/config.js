// el valor predeterminado de connectTimeout es de 10 segundos pero lo congiramos en 60.


const config = {
    db: {
        host: 'localhost',
        user: 'root',
        password: 'TomasLucas425!',
        database: 'MiBase',
        connectTimeout: 60000
    },
    listPerPage: 10,
};

module.exports = config;

