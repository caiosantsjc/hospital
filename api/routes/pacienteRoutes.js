const express = require('express');
const router = express.Router();
const Paciente = require('../models/Paciente');

// Retorna todos os pacientes
router.get('/pacientes', async (request, response) => {
    try {
        const pacientes = await Paciente.find();
        response.status(200).json(pacientes); // Corrigido para 'response'
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
});

// Retorna um paciente pelo ID
router.get('/paciente/:id', async (request, response) => {
    try {
        const paciente = await Paciente.findById(request.params.id);
        if (!paciente) {
            return response.status(404).json({ message: 'Paciente não encontrado' });
        }
        response.json(paciente);
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
});

// Cadastrar um paciente
router.post('/adicionarPaciente', async (request, response) => { // Adicionada a barra '/'
    try {
        const newPaciente = new Paciente(request.body);
        await newPaciente.save();
        response.status(201).json(newPaciente); // Corrigido para 'response'
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

module.exports = router;
