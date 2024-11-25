import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import LoginImg from '../imgs/imgLogin.svg';
import Back from '../imgs/icon-voltar.svg';
import EnfeiteDireita from '../EnfeiteDireita';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();

    const goToHomePage = () => {
      navigate('/');
    };

    const goToHomeAdmin = () => {
        navigate('/admin/HomeAdmin');
    };
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/receitopia/users', {
                username,
                password
            });

            // Se o login for bem-sucedido, redireciona para a página HomeAdmin
            if (response.status === 200) {
                goToHomeAdmin();
            }
        } catch (error) {
            setError('Credenciais inválidas. Tente novamente!');
        }
    };

    return(
        <div className='container-login'>
            <div className='lado1'>
                <div id='icon-back'>
                    <div className='back'>
                        <img src={Back} id="img-back" onClick={goToHomePage} alt="" height={40} width={50}/>
                    </div>
                    <img src={LoginImg} id="img-login" alt=""/>
                </div>
            </div>

            <div className='lado2'>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="username">Login:</label>
                        <input  type="text"  id="username" value={username} onChange={handleUsernameChange} placeholder="Digite seu usuário" required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Digite sua senha" required />
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button type="submit" id="btn-entrar">Entrar</button>
                </form>
            </div>
            <EnfeiteDireita />
        </div>
    );
}
