// Importando o React
import React, {useState} from "react";
// Importando os components necessários da lib react-materialize
import { Row, div, Switch, Button, Icon  } from 'react-materialize';
import axios from 'axios';
import { useHistory } from "react-router-dom";

 const Formulario = () => {

    function handleClick() {
        history.push("/cursos");
      }
    

        const [cursos, setCursos] = useState([{
            colecaoId: 0,
            descricao: "",
            nome:"",
            publico: false
        }])
        
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
        axios.post('https://flashcard-api-mayck.herokuapp.com/api/colecoes', cursos)
        .then((response)=> {
            history.push('/cursos');
        });
    }

    return(

        <div>

        <center><h4 className="subtitle">Novo Curso</h4></center>

        <form onSubmit= {onSubmit}>
        <label>Título</label>
        <input type="text" name = "nome" placeholder= "Título do Curso" onChange={onChange}/><br/><br/>

        <label>Descrição</label>
        <input type="text" name = "descricao" placeholder= "Descrição do Curso" onChange={onChange}/><br/><br/>

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