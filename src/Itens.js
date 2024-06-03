// Itens.js
import React, { useState } from 'react';

function Itens() {
  const [descricao, setDescricao] = useState('');
  const [itens, setItens] = useState([]);

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItens([...itens, descricao]);
    setDescricao('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Descrição:
          <input type="text" value={descricao} onChange={handleDescricaoChange} />
        </label>
        <input type="submit" value="Criar Item" />
      </form>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Itens;
