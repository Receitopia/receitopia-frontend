import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EdicaoAdmin.css';
import { useParams, useNavigate } from 'react-router-dom';  // useParams para pegar o id da rota e useNavigate para redirecionar após salvar
import EnfeiteDireita from '../EnfeiteDireita';
import EnfeiteEsquerda from '../EnfeiteEsquerda';

export default function EdicaoAdmin() {
    const [titulo, setTitulo] = useState('');
    const [imagem, setImagem] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [passos, setPassos] = useState('');
    const [receita, setReceita] = useState(null);
    const { id } = useParams();  // Pega o id da URL
    const navigate = useNavigate();  // Hook para navegação após salvar]

    const goToReceitasAdmin = () => {
        navigate('/admin/ReceitasAdm');
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/receitopia/cards/${id}`)
            .then(response => {
                const data = response.data;
                setTitulo(data.title);
                setImagem(data.image);
                setIngredientes(data.ingredients);
                setPassos(data.steps);
            })
            .catch(error => console.log('Erro ao buscar receita:', error));
    }, [id]);  // O useEffect vai rodar toda vez que o id mudar

    const handleSubmit = (e) => {
        e.preventDefault();

        const receitaAtualizada = {
            title: titulo,
            image: imagem,
            ingredients: ingredientes,
            steps: passos,
        };

        axios.put(`http://localhost:8080/receitopia/cards/${id}`, receitaAtualizada)
            .then(response => {
                alert('Receita atualizada com sucesso!');
                navigate('/admin/consultarReceitas');  // Redireciona de volta para a página de consultar receitas
            })
            .catch(error => {
                console.error('Erro ao atualizar receita:', error);
                alert('Houve um erro ao atualizar a receita');
            });
    };

    if (!titulo) return <p>Carregando...</p>;  // Exibe "Carregando..." enquanto os dados são carregados

    return (
        <div className="edicao-admin-container">
            <h2>Editar Receita</h2>
            <form onSubmit={handleSubmit}>
                <label>Título:</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />

                <label>Imagem:</label>
                <input
                    type="text"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    required
                />

                <label>Ingredientes:</label>
                <textarea
                    value={ingredientes}
                    onChange={(e) => setIngredientes(e.target.value)}
                    required
                />

                <label>Passos:</label>
                <textarea
                    value={passos}
                    onChange={(e) => setPassos(e.target.value)}
                    required
                />

                <button className="button-4" type="submit" onClick={goToReceitasAdmin}>Salvar Alterações</button>
            </form>
            <EnfeiteDireita/>
            <EnfeiteEsquerda/>
        </div>
    );
}
