// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cadastro from './Cadastro';
import Itens from './Itens';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Cadastro</Link>
            </li>
            <li>
              <Link to="/itens">Itens</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/itens" element={<Itens />} />
          <Route path="/" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
