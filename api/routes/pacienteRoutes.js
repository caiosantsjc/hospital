const express = require('express');
const router = express.Router();
const Paciente = require('../models/Paciente');

// Retorna todos os pacientes
router.get('/', async (request, response) => {
    try {
        const pacientes = await Paciente.find();
        response.status(200).json(pacientes);
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
});

// Retorna um paciente pelo CPF
router.get('/paciente/:CPF', async (request, response) => {
    try {
        const paciente = await Paciente.findOne({ CPF: request.params.CPF }); // Corrigido para buscar pelo CPF
        if (!paciente) {
            return response.status(404).json({ message: 'Paciente não encontrado' });
        }
        response.json(paciente);
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
});

// Cadastrar um paciente
router.post('/cadastrarPaciente', async (request, response) => {
    try {
        const newPaciente = new Paciente(request.body);
        await newPaciente.save();
        response.status(201).json(newPaciente);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

// Deletar um Paciente
router.delete('/removerPaciente/:CPF', async (request, response) => {
    try {
        const deletedPaciente = await Paciente.findOneAndDelete({ CPF: request.params.CPF }); // Corrigido para buscar pelo CPF
        if (!deletedPaciente) {
            return response.status(404).json({ message: 'Paciente não encontrado' });
        }
        response.status(200).json({ message: 'Paciente removido com sucesso' });
    } catch (error) {
        response.status(500).json({ error: error.message }); // Alterado para 500 em caso de erro do servidor
    }
});



module.exports = router;
