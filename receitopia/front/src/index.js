import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './home/Home';
import Catalog from './home-part2/Catalog';
import Login from './admin/Login';
import reportWebVitals from './reportWebVitals';
import AdminHome from './admin/HomeAdmin';
import NovaReceita from './admin/NovaReceita';
import Receita from './receita/Receita';
import ReceitasAdm from './admin/ReceitasAdm';
import EdicaoAdmin from './admin/EdicaoAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Envolva seus componentes com Router */}
      <Routes>
        {/* Defina as rotas para cada componente */}
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/admin/Login" element={<Login />} />
        <Route path="/admin/HomeAdmin" element={<AdminHome />} />
        <Route path="/admin/NovaReceita" element={<NovaReceita />} />
        <Route path="/receita/:id" element={<Receita />} />
        <Route path="/admin/consultarReceitas" element={<ReceitasAdm />} />
        <Route path="/admin/editar-receita/:id" element={<EdicaoAdmin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

