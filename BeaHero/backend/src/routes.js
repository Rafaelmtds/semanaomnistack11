const express = require("express");
const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController");
const profileController  = require("./controllers/ProfileController");
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get("/", (req, res) => {
  const params = req.query;
  console.log(params);

  res.send("Hello World");
});

//ONGs
routes.post("/ongs", ongController.create);
routes.get("/ongs", ongController.listagem);

//login
routes.post('/sessions', sessionController.create)

//Profile
routes.get('/profile', profileController.index);

//Casos
routes.post("/incident", incidentController.create);
routes.get("/incidents/list", incidentController.listarCasos);
routes.get("/incident", incidentController.recuperarCaso);
routes.delete("/incident/delete/:idCaso",incidentController.delete)

module.exports = routes;
