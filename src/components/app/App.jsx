import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Container from '../shared/template/Container'
import Header from '../shared/template/Header'
import SideNav from '../shared/template/SideNav'
import Toolbar from '../shared/template/Toolbar'
import Footer from '../shared/template/Footer'
import Routes from '../app/Routes'
import TopNav from '../shared/template/TopNav'
import Nav from '../shared/template/Nav'
import Row from '../shared/layout/Row'




const App = (props) => {
    return (
        <Container>
            <Header>  
                <img src="./img/logotipo_2021.png" alt="logo" fluid/>
            </Header>
            <Toolbar>

            </Toolbar>
            <Router>
            <TopNav>
                <Nav></Nav>
            </TopNav>
            <SideNav>
                <Nav></Nav>
            </SideNav>
            <Routes></Routes>
            </Router>
            <Footer>
                <Row xright>
                <span>2021 © Lucas Developer Web.</span>
                </Row>
            </Footer>
           
        </Container>
    )
}

export default App