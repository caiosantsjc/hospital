// src/routes/pacienteRoutes.js

const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// Retorna todos os pacientes
router.get('/', pacienteController.getAllPacientes);

// Retorna um paciente pelo CPF
router.get('/paciente/:CPF', pacienteController.getPacienteByCPF);

// Cadastrar um paciente
router.post('/cadastrarPaciente', pacienteController.createPaciente);

// Deletar um Paciente
router.delete('/removerPaciente/:CPF', pacienteController.deletePaciente);

// Alterar cadastro do paciente
router.put('/alterarPaciente/:CPF', pacienteController.updatePaciente);

module.exports = router;
