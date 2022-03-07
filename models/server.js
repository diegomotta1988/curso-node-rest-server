const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = '/api/users';

    // Middlewares
    this.middleWares();
    // Rutas de la app
    this.routes();
  }

  middleWares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use('/api/users', require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en ${this.port}`);
    });
  }
}

module.exports = Server;
