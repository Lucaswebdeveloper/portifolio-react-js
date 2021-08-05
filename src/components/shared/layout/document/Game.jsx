import React from 'react'


import './game.css'





const Game = props => {
    return (
        <div id="body-4">

            <div id="group">
                <div id="card-img-game">
                    <img className="imgs" src="./img/portifolio/game/globin-animation.png" alt="" fluid />
                    <span className="txts">SpriteSheet Personagem Pulando.</span>
                </div><br />

                <div id="card-img-game">
                    <img className="imgs" src="./img/portifolio/game/globin-game.png" alt="" fluid />
                    <span className="txts">Uma pequena prévia do jogo em 2D.</span>
                </div><br />
                <div id="card-img-game">
                    <img className="imgs" src="./img/portifolio/game/person-game.png" alt="" fluid />
                    <span className="txts">SpriteSheet Minotauro.</span>
                </div>

            </div>
            <div id="link">
                <h3>Baixe o jogo Globin</h3>
                    <p>Link:/mediafire.com/file/
                    naygs6nina41yk8/globim.zip</p>

                <span>Desenvolvido na Unity 3D</span>

            </div>
        </div>


    )
}

export default Game