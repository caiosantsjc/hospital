const express = require('express');
const app = express();
const mongoose = require(`mongoose`);
const port = 2105;


const nomeDB = "db_hospital";

app.use(express.json());


mongoose.connect(`mongodb://localhost:27017/${nomeDB}`)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
})