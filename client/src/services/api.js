import axios from 'axios';

const API_URL = 'http://localhost:2105/pacientes'; // Altere para a URL da sua API

export const getPacientes = () => axios.get(API_URL);
export const getPacienteByCPF = (cpf) => axios.get(`${API_URL}/paciente/${cpf}`);
export const createPaciente = (data) => axios.post(`${API_URL}/cadastrarPaciente`, data);
export const updatePaciente = (cpf, data) => axios.put(`${API_URL}/alterarPaciente/${cpf}`, data);
export const deletePaciente = (cpf) => axios.delete(`${API_URL}/removerPaciente/${cpf}`);
