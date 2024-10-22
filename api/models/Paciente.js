const mongoose = require(`mongoose`);

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    CPF: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    RG: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    idade: {
        type: Number,
        required: true,
        trim: true
    },
    sexo: {
        type: String,
        required: true,
        trim: true
    },
    telefone: {
        type: String,
        required: true
    },
    telefoneResponsavel: {
        type: String,
        required: false
    },

    descricaoCaso: {
        type: String,
        required: true
    },
    dataEntrada: {
        type: Date,
        required: true
    },
    dataSaida: {
        type: Date,
        required: false
    }
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;