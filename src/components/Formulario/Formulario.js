// Importando o React
import React, {useState} from "react";
// Importando os components necessários da lib react-materialize
import { Row, div, Switch, Button, Icon  } from 'react-materialize';
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import api from "../../services/api";

 const Formulario = () => {

    function handleClick() {
        history.push("/cursos");
      }
    
        const {colecaoId} = useParams();
        const [cursos, setCursos] = useState({
            colecaoId: 0,
            descricao: "",
            nome:"",
            publico: false
        })
        
        const history= useHistory();

    function onChange(ev){
     const {name, value} = ev.target;

     setCursos({ ...cursos,[name]: value});
    }

    function onChangeP(ev){
   
        setCursos({ ...cursos,publico: ev.target.checked});
       }

    function onSubmit(ev){
        ev.preventDefault();
        if(colecaoId){
          axios.put('https://flashcard-api-mayck.herokuapp.com/api/colecoes/' + colecaoId, cursos)
          .then((response)=> {
              history.push('/cursos');
          });
        }else{
          axios.post('https://flashcard-api-mayck.herokuapp.com/api/colecoes', cursos)
        .then((response)=> {
            history.push('/cursos');
        });
        }
    }

    useEffect(()=>{
      if(!colecaoId) return;
      api.get("/colecoes/" + colecaoId)
      .then(response => setCursos(response.data));
    },colecaoId)


    return(

        <div>

        <center><h4 className="subtitle">Novo Curso</h4></center>

        <form onSubmit= {onSubmit}>
        <label>Título</label>
        <input type="text" name = "nome" value = {cursos.nome} placeholder= "Título do Curso" onChange={onChange}/><br/><br/>

        <label>Descrição</label>
        <input type="text" name = "descricao" value = {cursos.descricao} placeholder= "Descrição do Curso" onChange={onChange}/><br/><br/>

    <center>
  <div class="switch">
    <label>
      Privado
      <input type="checkbox" checked = {cursos.publico} onChange={onChangeP}/>
      
      <span class="lever"></span>
      Público
    </label>
  </div>
</center>


<div class="row">
    
<Button
    node="button"
    style={{
      marginRight: '5px'
    }}
    waves="light"
    onClick = {handleClick}
  >
    Cancelar
  </Button>

        <Button
        node="button"
        type="submit"
        waves="light"
        >
        Cadastrar
       <Icon right>
        send
       </Icon>
       </Button>
       
        </div>
        </form>
        

         </div>
         
    );
    
  
}
export default Formulario;