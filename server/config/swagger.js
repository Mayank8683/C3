const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Online Bookstore API',
        version: '1.0.0',
        description: 'API documentation for the Online Bookstore application',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
      ],
    },
    apis: ['./routes/*.js'],
  };
  
  module.exports = swaggerOptions;
  