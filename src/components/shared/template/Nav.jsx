import React from 'react'
import MenuItem from './MenuItem'
import Menu from './Menu'


  

const Nav = (props) => {
    return (
    <nav>
          <Menu>
            <MenuItem to="/" label="Sobre mim" icon="home" />
            <MenuItem to="/portifolio" label="Portifolio" />
          </Menu>
    </nav>
    )
}

export default Nav