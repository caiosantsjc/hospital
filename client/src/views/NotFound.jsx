import React from 'react';

const NotFound = () => {
  return (
    <div style={notFoundStyle}>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  );
};

const notFoundStyle = {
  textAlign: 'center',
  marginTop: '50px',
};

export default NotFound;
