const { Cliente, Pieza } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readCliente = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteCliente = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateCliente = (req, res) =>
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createCliente = (req, res) =>
    new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });



// ------ ARTÍCULOS

exports.readPieza = (req, res) =>
    Pieza.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readPieza = (req, res) =>
    Pieza.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deletePieza = (req, res) =>
    Pieza.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



exports.updatePieza = (req, res) =>
    Pieza.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createPieza = (req, res) =>
    new Pieza({ nombre: req.body.nombre, precio: req.body.precio })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

