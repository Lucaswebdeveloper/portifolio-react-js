import React from 'react';
import { Progress } from 'reactstrap';
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobepremiere } from 'react-icons/si'
import { SiUnity } from 'react-icons/si'
import { SiAdobexd } from 'react-icons/si'
import { SiFigma } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaVuejs } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'
import { SiWebpack } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { SiAngular } from 'react-icons/si'
import { SiGulp } from 'react-icons/si'
import { SiNextDotJs } from 'react-icons/si'



import './progress.css'

const Progresso = (props) => {
    return (
        <div id="body-2">
            <h6>Código</h6>

            <div className="text-center"><SiHtml5 className="icon-web"/> <SiCss3 className="icon-web"/> HTML e CSS - (6 anos de Experiência)<br /> 100%</div>
            <Progress value="100" />
            <br />
            <br/>
            <div className="text-center"> <SiJavascript className="icon-web"/> JavaScripty - (3 anos de Experiência)<br /> 80%</div>
            <Progress value={80} />
            <br />
            <br/>
            <div className="text-center"><FaVuejs className="icon-web"/> Vue JS - (2 anos de Experiência)<br /> 80%</div>
            <Progress value={80} />
            <br/>
            <br/>
            <div className="text-center"><SiReact className="icon-web"/>React - (2 anos de Experiência)<br /> 80%</div>
            <Progress value={80} />
            <br/>
            <div className="text-center"><SiNextDotJs className="icon-web"/>Next JS - (1 anos de Experiência)<br /> 50%</div>
            <Progress value={80} />
            <br/>
            <br/>
            <div className="text-center"><SiWebpack className="icon-web"/>Webpack - (2 anos de Experiência)<br /> 70%</div>
            <Progress value={70} />
            <br />
            <br/>
            <div className="text-center"><SiBootstrap className="icon-web"/>Bootstrap - (2 anos de Experiência)<br /> 60%</div>
            <Progress value={60} />
            <br/>
            <br/>
            <div className="text-center"><SiPostgresql className="icon-web"/>Postgres - (2 anos de Experiência)<br /> 30%</div>
            <Progress value={30} />
            <br/>
            <br/>

            <div className="text-center"><SiMongodb className="icon-web"/>Mongo DB - (2 anos de Experiência)<br /> 30%</div>
            <Progress value={30} />
            <br/>
            <br/>

            <div className="text-center"><SiJquery className="icon-web"/>JQuery - (2 anos de Experiência)<br /> 30%</div>
            <Progress value={30} /><br />
             <br/>
             <div className="text-center"><SiAngular className="icon-web"/>Angular - (1 anos de Experiência)<br /> 20%</div>
            <Progress value={20} />
            <br/>
            <br/>
            <div className="text-center"><SiGulp className="icon-web"/>Gulp - (1 anos de Experiência)<br /> 20%</div>
            <Progress value={20} />
            <br/>
            <br/>
            <h6>Design</h6>
            <div id="photoshop">
                <div className="icon-desing">
                <SiAdobephotoshop className="icon" /><span>Photoshop - Avançado - 6 anos</span><br/>
                </div>
                <div className="icon-desing">
                <SiAdobeillustrator className="icon" />
                <span>Illustrator - Avançado - 6 anos</span>
                </div>
                <div className="icon-desing">
                <SiAdobepremiere className="icon"/>
                <span>Premiere - Intermédiario - 2 anos</span>
                </div>
                <div className="icon-desing">
                <SiAdobexd className="icon"/>
                <span>Adobe XD - Básico - 1 anos</span>
                </div>
                <div className="icon-desing">
                <SiFigma className="icon"/>
                <span>Figma - Básico - 1 anos</span>
                </div>
                <div className="icon-desing">
                <SiUnity className="icon"/>
                <span>Unity 3D - Avançado - 2 anos</span>
                </div>
                <div className="icon-desing">
                 <span>UX-UI- Intermédiario - 2 anos</span>
                </div>


            </div>


        </div>
    );
};

export default Progresso;