const express = require('express');
const bodyParser = require('body-parser');
const livroRoutes = require('./routes/livroRoutes');
const cors = require('cors'); 
require('dotenv').config();
require('./config/database'); // Conectando ao banco de dados


const app = express();


// Middlewares
app.use(bodyParser.json());

app.use(cors()); 


// Rotas
app.use('/livros', livroRoutes);


// Exportando a aplicação configurada
module.exports = app;
