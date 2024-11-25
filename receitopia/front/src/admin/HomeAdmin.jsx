// HomeAdmin.jsx
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css';

import IconAdm1 from '../imgs/icon-home-adm.svg'; 
import IconAdm2 from '../imgs/icon-cadastro-receita-adm.svg';
import IconAdm3 from '../imgs/icon-receita-adm.svg';
import EnfeiteDireita from "../EnfeiteDireita";
import EnfeiteEsquerda from "../EnfeiteEsquerda";

export default function HomeAdmin(){
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
    };
    
    const goToNovaReceita = () => {
        navigate('/admin/NovaReceita');
    };

    const goToReceitasAdm = () => {
        navigate('/admin/consultarReceitas');
    };

    return(
        <div className="container-admin-home">
            <h1> BEM-VINDO AO PORTAL DO ADMINISTRADOR </h1>

            <div className='homeAdm-section2-icons'>
                <div className='item-admin'>
                    <div className='content-adm' onClick={goToReceitasAdm}>
                        <img src={IconAdm3} className="icons-adm" alt=""/>
                        <p> Consultar receitas </p>
                    </div>
                </div>

                <div className='item-admin'> 
                    <div className='content-adm'>
                        <img src={IconAdm2} onClick={goToNovaReceita} className="icons-adm" alt=""/>
                        <p> Cadastrar nova receita </p>
                    </div>
                </div>

                <div className='item-admin'> 
                    <div className='content-adm'>
                        <img src={IconAdm1} onClick={goToHomePage} className="icons-adm" alt="" />
                        <p> Ir para a tela inicial </p>
                    </div>
                </div>
            </div>
            <EnfeiteDireita/>
            <EnfeiteEsquerda/>
        </div>
    );
}
