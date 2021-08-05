import React from 'react'


import './ilustration.css'





const Ilustration = props => {
    return (
    <div id="body-3">

         <div id="card-img">
         <img className="img" src="./img/portifolio/ilustration/viper-post-1.png" fluid alt=""/>
         <span className="txt">Desenho inspirado no Game VALORANT personagem Sage da Riot Games.</span>
        </div><br/><br/><br/><br/>
        
         <div id="card-img">
         <img className="img" src="./img/portifolio/ilustration/phoenix-superBoy-yellow.png"fluid alt=""/>
         <span className="txt">Desenho inspirado no Game VALORANT da Riot Games e na linguagem Javascripty.</span>
        </div><br/><br/><br/><br/>
        <div id="card-img">
         <img className="img" src="./img/portifolio/ilustration/phoenix-post-1.png" alt="" fluid/>
         <span className="txt">Desenho inspirado no Game VALORANT personagem Phoenix da Riot Games.</span>
        </div>
    </div>
    
   
    )
}

export default Ilustration
