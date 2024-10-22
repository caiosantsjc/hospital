// src/services/pacienteService.js

const Paciente = require('../models/Paciente');

class PacienteService {
    async getAllPacientes() {
        return await Paciente.find();
    }

    async getPacienteByCPF(CPF) {
        return await Paciente.findOne({ CPF });
    }

    async createPaciente(data) {
        const newPaciente = new Paciente(data);
        return await newPaciente.save();
    }

    async deletePaciente(CPF) {
        return await Paciente.findOneAndDelete({ CPF });
    }

    async updatePaciente(CPF, data) {
        return await Paciente.findOneAndUpdate({ CPF }, data, { new: true });
    }
}

module.exports = new PacienteService();
