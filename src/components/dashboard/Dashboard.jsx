import React from 'react'
import './dashboard.css'


import { AiOutlineMail } from 'react-icons/ai'
import { TiPhone } from 'react-icons/ti'
import { SiLinkedin } from 'react-icons/si'
import { ImWhatsapp } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'
import { ImBehance2 } from 'react-icons/im'

import Tabs from '../shared/layout/Tabs'






const Dashboard = props => {
    return (
        <div className="body-1">
            <div className="home">

            <div id="perfil">
                <img className="perfil-ft" src="./img/perfil/Lucas-Almeida-Vieira.png" alt="" fluid />
                <h1>Lucas Almeida Vieira</h1>
                <h3>Web Design</h3>
                <h5>Solteiro</h5>
                <h6>Idade: 31 anos</h6>
                <span>Atualmente atuo como Desenvolvedor de Sites e Identidade Visual para pequenas e grandes empresas no ramo digital.</span>


            </div>
            <div id="sobremim">
                <h2>Sobre mim</h2>
                <p>Sou profissional da categoria Design e Tecnologia, e faço serviços
                relacionados a Aplicativos para celular e redes sociais, Marketing Online,
                Áudio/Video Materiais promocionais, Criação de Logos, Desenvolvimento de Sites
                e Sistemas, Web Design, Convites, Ilustração, Edição de Fotos, Animação(Motion)
                ,Produção gráfica, Criação de Marca, Ux - Ui Design e Desenvolvimento de Games.
             </p>


            </div>
            </div>

            <div id="contato">
                <h3>Contato</h3>
                <div id="content">

                    <div id="part1">

                    <div id="email">
                        <AiOutlineMail className="icon1"/>
                        <span>lucaswebdeveloper@outlook.com</span>
                    </div>

                    <div id="phone">
                        <TiPhone className="icon1"/>
                        <span>11 5923 6709</span>
                    </div>

                    <div id="zap">
                          <ImWhatsapp className="icon1"/>  
                           <span>11 97861 6786</span>
                     </div>
                  

                     </div>
                     <div id="part2">

                     <div id="linkedin">
                          <SiLinkedin className="icon1"/>  
                           <span>linkedin.com/in/lucasdeveloperweb</span>
                     </div>

                     <div id="git">
                          <AiFillGithub className="icon1"/>  
                           <span>github.com/lucaswebdeveloper</span>
                     </div>

                     <div id="behance">
                          <ImBehance2 className="icon1"/>  
                           <span>behance.net/lukeetssp2c74</span>
                     </div>
                 

                     </div>





                </div>
               

            </div>

            <div className="tabs">
               <Tabs />
            </div>






        </div>

    )
}

export default Dashboard