// src/controllers/pacienteController.js

const pacienteService = require('../services/pacienteService');

exports.getAllPacientes = async (req, res) => {
    try {
        const pacientes = await pacienteService.getAllPacientes();
        res.status(200).json(pacientes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPacienteByCPF = async (req, res) => {
    try {
        const paciente = await pacienteService.getPacienteByCPF(req.params.CPF);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        res.json(paciente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPaciente = async (req, res) => {
    try {
        const newPaciente = await pacienteService.createPaciente(req.body);
        res.status(201).json(newPaciente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deletePaciente = async (req, res) => {
    try {
        const deletedPaciente = await pacienteService.deletePaciente(req.params.CPF);
        if (!deletedPaciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        res.status(200).json({ message: 'Paciente removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePaciente = async (req, res) => {
    try {
        const updatedPaciente = await pacienteService.updatePaciente(req.params.CPF, req.body);
        if (!updatedPaciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        res.status(200).json(updatedPaciente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
