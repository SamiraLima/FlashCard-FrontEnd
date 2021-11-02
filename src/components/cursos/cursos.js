import React, {useEffect, useState} from "react";
import {Row} from 'react-materialize';
import Curso from "./curso";


const Cursos = () => {

    const [cursos, setCursos] = useState([{
        colecaoId: 0,
        descricao: "Descrição nula"
        
    }])

    useEffect(()=>{
        fetch('https://flashcard-api-mayck.herokuapp.com/api/colecoes')
        .then(res => res.json())
        .then(res => setCursos(res))
        .catch(error => console.log(error))
    })

   return(
  <Row>
      {cursos.map(function(item){
          return <Curso>descricao={item.descricao}title={item.descricao}</Curso>
      })}
  </Row>
  )

  };

export default Cursos;