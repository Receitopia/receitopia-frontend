import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Receita.css';
import { useNavigate } from 'react-router-dom';
import Back from '../imgs/icon-voltar.svg';

export default function Receita() {
  const { id } = useParams(); // Captura a ID da receita da URL
  const [receita, setReceita] = useState(null);
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/receitopia/cards/${id}`)  //requisição para pegar os detalhes da receita com o ID
      .then(response => {
        setReceita(response.data); // att o estado com os dados da receita
      })
      .catch(error => {
        console.error('Erro ao carregar a receita:', error);
      });
  }, [id]); // executa novamente quando o ID mudar

  if (!receita) {
    return <p>Carregando...</p>; 
  }

  return (
    <div className="receita-container">
    <div className='back'>
        <img src={Back} id="img-back" onClick={goToHomePage} alt="" height={40} width={50}/>
    </div>
      <h1>{receita.title}</h1>
      <img src={receita.image} alt={receita.title} />
      <h2>Ingredientes:</h2>
      <p>{receita.ingredients}</p>
      <h2>Passo a Passo:</h2>
      <p>{receita.steps}</p>
    </div>
  );
}
