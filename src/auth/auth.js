import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap'; //1
import Login from './login';
import Signup from './signup';
import './auth.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const Auth = (props) => { //2
  return(
    <Router>
      <Container className="auth-container">
          <Col lg="6" className="login-col">
            <Switch>   
              <Route path="/" exact component={() => <Login updateToken={props.updateToken} updateEmail={props.updateEmail}/>} />
              <Route path="/signup" component={Signup} />  
            </Switch> 
          </Col>
      </Container>  
    </Router>
  )
}

export default Auth;