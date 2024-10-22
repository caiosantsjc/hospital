// src/components/PatientForm.jsx

import React, { useState, useEffect } from 'react';

const PatientForm = ({ onSubmit, paciente, editMode, onClear }) => {
  const [formData, setFormData] = useState({
    nome: '',
    CPF: '',
    RG: '',
    idade: '',
    sexo: '',
    telefone: '',
    telefoneResponsavel: '',
    descricaoCaso: '',
    dataEntrada: '',
    dataSaida: ''
  });

  useEffect(() => {
    if (editMode && paciente) {
      setFormData(paciente);
    } else {
      setFormData({
        nome: '',
        CPF: '',
        RG: '',
        idade: '',
        sexo: '',
        telefone: '',
        telefoneResponsavel: '',
        descricaoCaso: '',
        dataEntrada: '',
        dataSaida: ''
      });
    }
  }, [editMode, paciente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>{editMode ? 'Editar Paciente' : 'Cadastrar Paciente'}</h2>
      <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
      <input name="CPF" value={formData.CPF} onChange={handleChange} placeholder="CPF" required />
      <input name="RG" value={formData.RG} onChange={handleChange} placeholder="RG" required />
      <input name="idade" value={formData.idade} onChange={handleChange} placeholder="Idade" type="number" required />
      <select name="sexo" value={formData.sexo} onChange={handleChange} required>
        <option value="" disabled>Sexo</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>
      <input name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" required />
      <input name="telefoneResponsavel" value={formData.telefoneResponsavel} onChange={handleChange} placeholder="Telefone do Responsável" />
      <textarea name="descricaoCaso" value={formData.descricaoCaso} onChange={handleChange} placeholder="Descrição do Caso" required />
      <input name="dataEntrada" value={formData.dataEntrada} onChange={handleChange} placeholder="Data de Entrada" type="date" required />
      <input name="dataSaida" value={formData.dataSaida} onChange={handleChange} placeholder="Data de Saída" type="date" />
      <button type="submit">{editMode ? 'Atualizar' : 'Cadastrar'}</button>
      <button type="button" onClick={onClear}>Cancelar</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};

export default PatientForm;
