const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();
app.use(cors());
//Mostra que as requisições do body serão em json
app.use(express.json())
app.use(routes);


app.listen(3333);