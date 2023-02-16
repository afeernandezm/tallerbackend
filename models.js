const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Pieza = mongoose.model('Pieza',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Cliente: Cliente,
  Pieza: Pieza
}
