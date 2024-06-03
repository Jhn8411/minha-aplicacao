// Cadastro.js
import React, { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bem-vindo, ${nome}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleNomeChange} />
      </label>
      <input type="submit" value="Cadastrar" />
    </form>
  );
}

export default Cadastro;
