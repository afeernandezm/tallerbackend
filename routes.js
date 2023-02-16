const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();

router.get("/clientes", cors(), controller.readClientes);   // Read All
router.get("/clientes/:id", cors(), controller.readCliente);    // Read
router.delete("/clientes/:id", cors(), controller.deleteCliente);  // Delete
router.put("/clientes/:id", cors(), controller.updateCliente);  // Update
router.post("/clientes", cors(), controller.createCliente);  // Create

router.get("/piezas", cors(), controller.readpiezas);  // Read All
router.get("/piezas/:id", cors(), controller.readPieza);   // Read
router.delete("/piezas/:id", cors(), controller.deletePieza); // Delete
router.put("/piezas/:id", cors(), controller.updatePieza); // Update
router.post("/piezas", cors(), controller.createPieza); // Create


module.exports = router;
