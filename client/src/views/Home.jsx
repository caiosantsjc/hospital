import React, { useEffect, useState } from 'react';
import { getPacientes, createPaciente, updatePaciente, deletePaciente } from '../services/api';
import PatientForm from '../components/PatientForm';
import PatientList from '../components/PatientList';

const Home = () => {
  const [pacientes, setPacientes] = useState([]);
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    try {
      const response = await getPacientes();
      setPacientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

  const handleAddPaciente = async (paciente) => {
    try {
      await createPaciente(paciente);
      fetchPacientes(); // Atualiza a lista após a adição
    } catch (error) {
      console.error('Erro ao adicionar paciente:', error);
    }
  };

  const handleUpdatePaciente = async (paciente) => {
    try {
      await updatePaciente(paciente.CPF, paciente);
      fetchPacientes(); // Atualiza a lista após a atualização
      clearForm();
    } catch (error) {
      console.error('Erro ao atualizar paciente:', error);
    }
  };

  const handleDeletePaciente = async (cpf) => {
    try {
      await deletePaciente(cpf);
      fetchPacientes(); // Atualiza a lista após a remoção
    } catch (error) {
      console.error('Erro ao remover paciente:', error);
    }
  };

  const handleEditPaciente = (paciente) => {
    setSelectedPaciente(paciente);
    setEditMode(true);
  };

  const clearForm = () => {
    setSelectedPaciente(null);
    setEditMode(false);
  };

  return (
    <div>
      <PatientForm 
        onSubmit={editMode ? handleUpdatePaciente : handleAddPaciente} 
        paciente={selectedPaciente} 
        editMode={editMode} 
        onClear={clearForm} 
      />
      <PatientList 
        pacientes={pacientes} 
        onEdit={handleEditPaciente} 
        onDelete={handleDeletePaciente} 
      />
    </div>
  );
};

export default Home;
