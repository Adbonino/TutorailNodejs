const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  swaggerDefinition: {
    restapi: '3.0.0',
    info: {
      title: 'Api Cursos',
      version: '1.0.0',
      description: 'Documentacion de la API de cursos.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['routers/*.js'],
}

const specs = swaggerJsdoc(options)

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}