// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Cursos from "./components/cursos/cursos";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
import Formulario from "./components/Formulario/Formulario";


const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cursos' component={Cursos}/>
        <Route path='/formulario' component={Formulario}/>
        <Route path='/editar/:colecaoId' component={Formulario}/>

      </Switch>
    </Container>
  </main>  
);

export default Main;