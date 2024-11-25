import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ReceitasAdm.css';
import Back from '../imgs/icon-voltar.svg';
import EnfeiteDireita from '../EnfeiteDireita';
import EnfeiteEsquerda from '../EnfeiteEsquerda';

export default function ReceitasAdm() {
    const [receitas, setReceitas] = useState([]);
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
      };

    // Buscar receitas do servidor
    useEffect(() => {
        axios.get('http://localhost:8080/receitopia/cards')  // Ajuste o endpoint conforme sua API
            .then(response => {
                setReceitas(response.data);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar as receitas", error);
            });
    }, []);

    // Função para excluir uma receita
    const excluirReceita = (id) => {
        axios.delete(`http://localhost:8080/receitopia/cards/${id}`) // Ajuste conforme seu endpoint
            .then(response => {
                // Atualizar a lista de receitas após excluir
                setReceitas(receitas.filter(receita => receita.id !== id));
            })
            .catch(error => {
                console.error("Houve um erro ao excluir a receita", error);
            });
    };

    // Função para redirecionar para a página de edição
    const editarReceita = (id) => {
        navigate(`/admin/editar-receita/${id}`);
    };

    return (
        
        <div className="receitas-adm-container">
            <div className='back'>
                <img src={Back} id="img-back" onClick={goToHomePage} alt="" height={40} width={50}/>
            </div>
            <h2 id="title-consultar-receitas">Consultar Receitas</h2>
            <div className="cards-container">
                {receitas.map((receita) => (
                    <div className="card" key={receita.id}>
                        <img src={receita.image} alt={receita.title} className="card-img" />
                        <div className="card-content">
                            <h3>{receita.title}</h3>
                            <button className="card-btn-edit" onClick={() => editarReceita(receita.id)}>
                                Editar
                            </button>
                            <button className="card-btn-del" onClick={() => excluirReceita(receita.id)}>
                                Excluir 
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <EnfeiteDireita />
            <EnfeiteEsquerda />
        </div>
    );
}
