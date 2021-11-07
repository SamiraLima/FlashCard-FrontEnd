// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="purple">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="cursos">Cursos</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;