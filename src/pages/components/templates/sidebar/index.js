import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../../assets/logo.png';

export default function SideBar(){
    return(
        <div className="left">
            <span className="dotsBubble"></span>
            <span className="dotsBubble Dois"></span>
            <span className="dotsBubble Tres"></span>
            <section className="global">
                <header className="headerLogo">
                    <img src={LogoImg} />
                </header>
                <ul className="OptionMenuUser">
                    <li className="ativo"><Link to={{pathname: '/home', from: window.location.href}}><i class="fas fa-tachometer-alt"></i> Deashboard</Link></li>
                    <li className="special">
                        <span className="sideLeftOfTheForce">
                            <i class="fas fa-chart-pie"></i>
                        </span>
                        <ul className="OptionAnalytics">
                            <li><strong>Analise</strong></li>
                            <li><Link>Conteudo</Link></li>
                            <li><Link>Engajamento</Link></li>
                            <li><Link>Ganhos</Link></li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section className="sectionUser">
                <a onClick={(e)=>{localStorage.removeItem('tokenMegaBank'); window.location.href = '/';}} ><i class="fas fa-sign-out-alt"></i>Sair</a>
            </section>
        </div>
    );
}