import React from 'react'


import './drawing.css'





const Drawing = props => {
    return (
    <div id="body-3">

         <div id="card-img">
         <img className="img" src="./img/portifolio/drawing/lustre.jpg" alt="" fluid/>
         <span className="txt">Pendente com LED Integrado foto em still E-Commerce -1.</span>
        </div><br/>
        
         <div id="card-img">
         <img className="img" src="./img/portifolio/drawing/lustre-pendente.jpg" alt="" fluid/>
         <span className="txt">Pendente com LED Integrado foto em still E-Commerce com foco.</span>
        </div><br/>
        <div id="card-img">
         <img className="img" src="./img/portifolio/drawing/pendente.jpg" alt="" fluid/>
         <span className="txt">Pendente com LED Integrado foto em still E-Commerce -3.</span>
        </div>
    </div>
    
   
    )
}

export default Drawing