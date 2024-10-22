import React from 'react';

const PatientList = ({ pacientes, onEdit, onDelete }) => {
  return (
    <div style={listStyle}>
      <h2>Lista de Pacientes</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.CPF}>
              <td>{paciente.nome}</td>
              <td>{paciente.CPF}</td>
              <td>{paciente.RG}</td>
              <td>{paciente.idade}</td>
              <td>
                <button onClick={() => onEdit(paciente)}>Editar</button>
                <button onClick={() => onDelete(paciente.CPF)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const listStyle = {
  margin: '20px auto',
  maxWidth: '600px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

export default PatientList;
