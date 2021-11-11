// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Col, Card, Icon, CardTitle } from 'react-materialize';


const Curso = (props) => (
  
  <Col
    l={4}
    m={6}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={props.descricao}
      revealIcon={<Icon>more_vert</Icon>}
      title={props.title}
    >
      <p>
        <a href="#">
          Editar
        </a>
      </p>
    </Card>
  </Col>

);

export default Curso;