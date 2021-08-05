import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import Ilustration from '../layout/document/Ilustration'

import './direction.css'
import Logotipo from './document/Logotipo';
import Photo from './document/Photo';
import Drawing from './document/Drawing';
import Game from './document/Game';
import PhotoAmbient from './document/PhotoAmbient';
import CardVisit from './document/CardVisit'

const Exemple = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>

                    <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                        Ilustrações
                       </NavLink>

                </NavItem>
                <NavItem>

                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                        Logotipos
                   </NavLink>

                </NavItem>
                <NavItem>

                    <NavLink className={classnames({ active: activeTab === '7' })} onClick={() => { toggle('7'); }}>
                        Cartão de Visitas
                    </NavLink>

                </NavItem>
                <NavItem>

                    <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                        Fotos
                    </NavLink>

                </NavItem>
                <NavItem>

                    <NavLink className={classnames({ active: activeTab === '6' })} onClick={() => { toggle('6'); }}>
                        Foto Ambientada
                </NavLink>

                </NavItem>
                <NavItem>

                    <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}>
                        Desenhos Técnicos
                    </NavLink>

                </NavItem>

                <NavItem>

                    <NavLink className={classnames({ active: activeTab === '5' })} onClick={() => { toggle('5'); }}>
                        Jogos Digitais
                </NavLink>

                </NavItem>




            </Nav>


            <TabContent activeTab={activeTab}>

                <TabPane tabId="1">

                    <Row>
                        <Ilustration />

                    </Row>

                </TabPane>

                <TabPane tabId="2">

                    <Row>
                        <Logotipo />

                    </Row>

                </TabPane>
                <TabPane tabId="3">

                    <Row>
                        <Photo />

                    </Row>

                </TabPane>
                <TabPane tabId="4">

                    <Row>
                        <Drawing />

                    </Row>

                </TabPane>
                <TabPane tabId="5">

                    <Row>
                        <Game />

                    </Row>

                </TabPane>
                <TabPane tabId="6">

                    <Row>
                        <PhotoAmbient />

                    </Row>

                </TabPane>
                <TabPane tabId="7">

                    <Row>
                        <CardVisit />

                    </Row>

                </TabPane>
            </TabContent>
        </div>
    );
}

export default Exemple;