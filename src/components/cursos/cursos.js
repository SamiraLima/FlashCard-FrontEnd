import React, {useEffect, useState} from "react";
import {Row,Icon, Button, Col} from 'react-materialize';
import Formulario from "../Formulario/Formulario";
import Curso from "./curso";
import { useHistory } from "react-router-dom";





const Cursos = () => {

    const [cursos, setCursos] = useState([{
        colecaoId: 0,
        descricao: "Descrição nula",
        nome:"",
        publico: false
    }])

    useEffect(()=>{
        fetch('https://flashcard-api-mayck.herokuapp.com/api/colecoes')
        .then(res => res.json())
        .then(res => setCursos(res))
        .catch(error => console.log(error))
    },1)

    const history= useHistory();

    function handleClick() {
        history.push("/formulario");
      }
    

    

   return(
       <Col>
  <Row>
      {cursos.map(function(curso){
          return <Curso descricao={curso.descricao}title={curso.nome} colecaoId={curso.colecaoId}></Curso>
      })}
  </Row>

<center>
  <Row>
      <Button
  className="purple"
  floating
  icon={<Icon>add</Icon>}
  large
  node="button"
  waves="light"
  onClick = {handleClick}
  />
</Row>
</center>

  </Col>
  )
  
  };

export default Cursos;