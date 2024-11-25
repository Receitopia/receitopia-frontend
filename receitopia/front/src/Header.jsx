import logo from './imgs/logo.svg';
import './Header.css';


export default function Header(){
    return(
        <div className='header'>
            <div className="logo">
                <img src={logo} className="logo-img" alt=""/>
            </div>
            <div className="home-header">
            <a href='#incio'> INICIO </a>
                <a href='#contato'> CONTATO </a> 
                <a href='#sobre'> SOBRE NÓS </a> 
                <a href='#explore'> EXPLORAR </a>
            </div>
        </div>
    );
}
