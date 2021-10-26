// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
import estudos1 from '../../images/estudos1.jpg';
import estudos2 from '../../images/estudos2.jpg';
import estudos3 from '../../images/estudos3.jpg';


const Home = () => (
  
    
    <Col m={8} s={12}>
        <center><h4 className="subtitle">Venha Aprender Com A Gente</h4></center>
        <Row>

      <Col m={4} s={12}>
      <h5 className="subtitle">Anime-se</h5>
      <Card>
      
      <Row className="center-align">
      <img src={estudos3} className=" responsive-img" />

      <h6>Por menor que seja o seu tempo de estudo, estude! Não tenha medo de crescer lentamente, tenha medo apenas de ficar parado!</h6>

      </Row>
        </Card>

      </Col>

      <br></br>
      <br></br>


      <Col m={4} s={12}>
      <Card>
      
      <Row className="center-align">
      <img src={estudos2} className=" responsive-img" />

      <h6>Não é sempre que estamos motivados. Por isso, mantenha a disciplina. Assim, você conseguirá estudar e os frutos virão.</h6>
      </Row>
        </Card>

        
      
      </Col>

      <Col m={4} s={12}>
      <Card>
      
      <Row className="center-align">
      <img src={estudos1} className=" responsive-img" />

      <h6>O maior risco é não correr riscos. Em um mundo que muda rapidamente, a única forma garantida de falhar é não correr riscos.</h6>
      </Row>
        </Card>

      
      </Col>


    </Row>
        
    </Col>
  
);

export default Home;