// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Col, Card, Icon, CardTitle } from 'react-materialize';
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";


const Curso = (props) => {
  const history = useHistory();
  
  const handlerExcluir = (e) => { 
    e.preventDefault();

    if( window.confirm ("Deseja excluir o curso " + props.title + "?") ){
      api.delete("/colecoes/" + props.colecaoId )
       .then( () => history.go(0) );
      
    }
  };
   
  return(
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
        <Link to = {"/editar/" + props.colecaoId}>Editar</Link> | <a href = "#" onClick = {handlerExcluir}>Excluir</a>

      </p>  
    </Card>
  </Col>
  );
  };

export default Curso;