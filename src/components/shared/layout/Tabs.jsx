import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './tabs.css'

import Progress from '../layout/Progress'

const Example = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Educação
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                        Experiência
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                        Habilidade Pessoal
                    </NavLink>
                </NavItem>



            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col lg="12">
                            <Card body>
                                <dl>
                                    <dt>2019-2025</dt>
                                    <dd>- Sistemas para Internet</dd>
                                    <dd>Universidade Anhembi Morumbi</dd><br />
                                    <dt>2020--2021</dt>
                                    <dd>- Web Moderno</dd>
                                    <dd>Cod3r Cursos Online</dd><br />
                                    <dt>2020-2020</dt>
                                    <dd>- Desenvolvedor Front-End</dd>
                                    <dd>Senai de Tecnologia</dd><br />
                                    <dt>2018-2018</dt>
                                    <dd>- Desenhista de Paginas Web (Web Designer)</dd>
                                    <dd>Senai Frederico Jacob</dd><br />
                                    <dt>2015-2016</dt>
                                    <dd>- Técnico em Programação de Jogos Digitais</dd>
                                    <dd>Universidade Senac Nações Unidas</dd><br />


                                </dl>


                            </Card>
                        </Col>

                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col lg="12">
                            <Card body>
                                <dl>
                                    <dt>11/2018 a 05/2020 ( 1 ano e 6 meses)</dt>
                                   
                                    <dd>- Lustres Yamamura</dd>
                                    <dd>Último Salário:  R$ 1.700,00</dd>
                                    <dd>Função: Assistente de E-Commerce e Web Designer</dd>
                                    <li>Fotográfia</li>
                                    <li>Edição de Fotos</li>
                                    <li>Fotos Ambientada</li>
                                    <li>Desenhos Técnicos</li>
                                    <li>Banner</li>
                                    <li>landing pages</li>
                                    <li>Cadastro de Imagens no E-Commerce</li>
                                    <li>Identidade Visual</li>
                                    <li>Marketing Digital</li><br/>
                                    <dt>03/2017 a 03/2018 ( 1 ano ) </dt>
                                    <dd>- Nacar Comercial</dd>
                                    <dd>Último Salário:  R$ 1.400,00</dd>
                                    <dd>Função: Assistente de E-Commerce</dd>
                                    <li>Fotográfia</li>
                                    <li>Edição de Fotos</li>
                                    <li>Banner</li>
                                    <li>Animações</li>
                                    <li>Redes Sociais</li>
                                    <li>Cadastro de Produtos no E-Commerce</li>
                                    <li>Análise de dados</li>
                                    <li>Emissão de notas</li>
                                    <li>Marketing Digital</li>
                                    <li>Técnico em Conteúdo Visual</li><br/>
                                    <dt>09/2016 a 03/2017 ( 6 meses )</dt>
                                    <dd>- Casa Bayard </dd>
                                    <dd>Último Salário: R$ 1.100,00</dd>
                                    <dd>Função: Auxiliar de Lojistica</dd>
                                    <li>Estoquista</li><br />

                                </dl>



                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col lg="12">
                            <Card body>
                                <div id="habilidades">
                                    <dl>
                                        <dt>Idiomas</dt><br />
                                        <dd>Português Nativo</dd>
                                        <dd>Inglês Intermediário</dd>
                                    </dl>
                                    <br />
                                    <div id="progress">
                                         <Progress />
                                    </div>
                                 
                                </div>



                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Example;