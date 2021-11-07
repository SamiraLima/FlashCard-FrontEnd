// Importando o React
import React, {useState} from "react";
// Importando os components necessários da lib react-materialize
import { Row, div, Switch, Button, Icon  } from 'react-materialize';
import axios from 'axios';
import { useHistory } from "react-router-dom";

 const Formulario = () => {

        const [cursos, setCursos] = useState([{
            colecaoId: 0,
            descricao: "",
            nome:""
        }])
        
        const history= useHistory();


    function onChange(ev){
     const {name, value} = ev.target;

     setCursos({ ...cursos,[name]: value});
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

        <center><h4 className="subtitle">Formulário</h4></center>

        <form onSubmit= {onSubmit}>
        <label>Título</label>
        <input type="text" name = "nome" placeholder= "Título do Curso" onChange={onChange}/><br/><br/>

        <label>Descrição</label>
        <input type="text" name = "descricao" placeholder= "Descrição do Curso" onChange={onChange}/><br/><br/>

        


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
        
        </form>
        

         </div>
         
    );
    
  
}
export default Formulario;