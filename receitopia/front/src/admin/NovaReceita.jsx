import './NovaReceita.css';

import React, { useState } from 'react';
import axios from 'axios';
import EnfeiteDireita from '../EnfeiteDireita';
import EnfeiteEsquerda from '../EnfeiteEsquerda';
import { useNavigate } from 'react-router-dom';
import Back from '../imgs/icon-voltar.svg';

export default function NovaReceita() {
  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [passoAPasso, setPassoAPasso] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const goToHomeAdmin = () => {
    navigate('/admin/HomeAdmin');
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar reload da página

    const novaReceita = {
      title: titulo,
      image: imagem,
      ingredients: ingredientes,
      steps: passoAPasso,
    };

    try {
      // Fazer requisição POST para o backend
      const response = await axios.post('http://localhost:8080/receitopia/cards', novaReceita);

      // Mostrar mensagem de sucesso
      setMensagem('Receita cadastrada com sucesso!');
      
      // Limpar o formulário
      setTitulo('');
      setImagem('');
      setIngredientes('');
      setPassoAPasso('');
    } catch (error) {
      console.error('Erro ao cadastrar a receita:', error);
      setMensagem('Erro ao cadastrar a receita. Tente novamente.');
    }
  };

  return (
    <div className="container-nova-receita">
      <div className="nova-receita">
      <div className='back'>
            <img src={Back} id="img-back" onClick={goToHomeAdmin} alt="" height={40} width={50}/>
      </div>
        <h2>INSIRA UMA NOVA RECEITA </h2>
        <form id="form2" onSubmit={handleSubmit}>
          <div className='item2'>
            <label className='lab2'>Título:</label>
            <input type="text" className='input1' value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          </div>
          <div className='item2'>
            <label className='lab2'>Imagem (URL):</label>
            <input type="text" className='input1' value={imagem} onChange={(e) => setImagem(e.target.value)} required />
          </div>
          <div className='item2'>
            <label className='lab2'>Ingredientes:</label>
            <textarea className='input2' value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required />
          </div>
          <div className='item2'>
            <label className='lab2'>Passo a Passo:</label>
            <textarea className='input2' value={passoAPasso} onChange={(e) => setPassoAPasso(e.target.value)} required />
          </div>
          <button type="submit" id="btn-salvar-receita">Salvar Receita</button>
        </form>
        {mensagem && <p>{mensagem}</p>}
      </div>
      <EnfeiteDireita />
      <EnfeiteEsquerda />
    </div>
  );
}
