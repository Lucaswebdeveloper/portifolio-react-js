import React from 'react'


import './photo.css'





const Photo = props => {
    return (
    <div id="body-3">

         <div id="card-img">
         <img className="img" src="./img/portifolio/photo/pendente-aluminio-cobre-led.jpg" alt="" fluid/>
         <span className="txt">Pendente com LED Integrado foto em still E-Commerce -1.</span>
        </div><br/><br/>
        
         <div id="card-img">
         <img className="img" src="./img/portifolio/photo/pendente-aluminio-cobre-led-1.jpg" alt="" fluid/>
         <span className="txt">Pendente com LED Integrado foto em still E-Commerce com foco.</span>
        </div><br/><br/>
        <div id="card-img">
         <img className="img" src="./img/portifolio/photo/pendente-aluminio-cobre-led-2.jpg" alt="" fluid/>
         <span className="txt">Pendente com LED Integrado foto em still E-Commerce -3.</span>
        </div>
    </div>
    
   
    )
}

export default Photo
