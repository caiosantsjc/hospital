const pacienteRoutes = require('./routes/pacienteRoutes');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 2105;
const nomeDB = "db_hospital";

mongoose.connect(`mongodb://localhost:27017/${nomeDB}`)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

app.use(express.json());
app.use('/api/pacientes', pacienteRoutes);

// Middleware de erro
app.use((err, req, res, next) => {
    console.error(err.stack); // Log do erro
    res.status(500).json({ error: 'Algo deu errado!' }); // Resposta genérica de erro
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});
