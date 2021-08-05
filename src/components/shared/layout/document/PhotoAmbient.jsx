import React from 'react'


import './photoAmbient.css'





const PhotoAmbient = props => {
    return (
    <div id="body-3">

         <div id="card-img">
         <img className="img" src="./img/portifolio/photoAmbient/lustre-moderno.jpg" alt="" fluid/>
         <span className="txt"> Lustre Ambientado em uma sala de estar para E-Commerce -1.</span>
        </div><br/><br/>
        
         <div id="card-img">
         <img className="img" src="./img/portifolio/photoAmbient/comtemporaneo.jpg" alt="" fluid/>
         <span className="txt">Pendente ambientado no Home-Office foto para E-Commerce.</span>
        </div><br/><br/>
        <div id="card-img">
         <img className="img" src="./img/portifolio/photoAmbient/pendente-cobre.jpg" alt="" fluid/>
         <span className="txt">Pendente Cobre com LED Integrado Ambientado para E-Commerce.</span>
        </div>
    </div>
    
   
    )
}

export default PhotoAmbient