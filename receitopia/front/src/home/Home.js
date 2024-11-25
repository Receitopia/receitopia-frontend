import './Home.css';
import { useNavigate } from 'react-router-dom';
import homeImg1 from '../imgs/homeImg1.svg';
import Header from '../Header';
import Icon1 from "../imgs/icon1.svg";
import Icon2 from "../imgs/icon2.svg";
import Icon3 from "../imgs/icon3.svg";
import Icon4 from "../imgs/icon4.svg";
import Food1 from "../imgs/icon-food1.svg";
import Food2 from "../imgs/icon-food2.svg";
import Food3 from "../imgs/icon-food3.svg";
import { useState, useEffect } from 'react';
import axios from 'axios'; 

function Home() {
  const navigate = useNavigate();
  const [receitas, setReceitas] = useState([]);

  const goToLoginPage = () => {
    navigate('/admin/Login');
  };

  const goToReceita = (id) => {
    navigate(`/receita/${id}`);
  };

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/receitopia/cards');
        setReceitas(response.data); // Atualiza o estado com as receitas recebidas
      } catch (error) {
        console.error("Erro ao carregar as receitas", error);
      }
    };

    fetchReceitas(); //chama a função para buscar as receitas
  }, []);

  return (
    <div className="Home">
      <Header/>
      <body>
        <div className='container'>
            <div className='home-intro'>
              <button id='btn-admin' onClick={goToLoginPage}> admin? </button>
                <h1 id='home-title'> Publique ou encontre receitas fantásticas</h1>
                <br></br>
                <p id='home-subtitle'> O Receitopia é um portal de receitas com o objetivo de incentivar pessoas a experienciar a arte gastronomica reproduzindo pratos inspiradores </p>
                <button id='btn1' onClick={() => document.getElementById('home-receitas').scrollIntoView({ behavior: 'smooth' })}> EXPLORE RECEITAS </button>
                <div></div>
                <a href='feedback' id='feedback-link'>clique para deixar seu feedback</a>
            </div>
            <div className='home-img'>
                <img src={homeImg1} className="receitopia-img1" alt=""/>
            </div>
        </div>


        <div className='home-section2'>
          <h1 id='title2'> POR QUE ESCOLHER RECEITOPIA? </h1>
          <div className='home-section2-icons'>

            <div className='item'>
              <div className='content'>
                <img src={Icon1} className="icons" alt=""/>
                <p> Cozinhe como um chef </p>
              </div>
            </div>

            <div className='item'> 
              <div className='content'>
                <img src={Icon2} className="icons" alt=""/>
                <p> Comidas de qualidade </p>
              </div>
            </div>

            <div className='item'> 
              <div className='content'>
                <img src={Icon3} className="icons" alt="" />
                <p> Diversidade de ingredientes </p>
              </div>
            </div>

            <div className='item'> 
              <div className='content'>
                <img src={Icon4} className="icons" alt=""/>
                <p> Receitas simples e faceis </p>
              </div>
            </div>
          </div>
        </div>


        <div className='home-section3'>
          <h2> </h2>
            <div className='home-section3-icons'>
              <div className='icon-food'> 
                  <div className='content-food'>
                    <img src={Food1} className="icons-food" alt=""/>
                    <p> Salgados </p>
                  </div>
                </div>

                <div className='icon-food'> 
                  <div className='content-food'>
                    <img src={Food2} className="icons-food" alt=""/>
                    <p> Sobremesas </p>
                  </div>
                </div>

                <div className='icon-food'> 
                  <div className='content-food'>
                    <img src={Food3} className="icons-food" alt=""/>
                    <p> Saldaveis </p>
                  </div>
              </div>
          </div>
        </div>

        <div className='home-receitas' id='home-receitas'>
          <h2>EXPLORE NOSSOS PRATOS</h2>
          <div className='cards-container'>
            {receitas.map((receita) => (
              <div className='card' key={receita.id}>
                <img src={receita.image} alt={receita.title} className="card-img"/>
                <div className="card-content">
                  <h3>{receita.title}</h3>
                  <button className="card-btn" onClick={() => goToReceita(receita.id)}>Ver Receita</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body> 
    </div>
  );
}

export default Home;
