import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'; 
import APIURL from '../helpers/environment';
import '../App.css';
import { Link } from 'react-router-dom';

const Login = (props) => {

  const [email, setemail] = useState(''); 
  const [password, setpassword] = useState(''); 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}api/user/signin`,{
      method: 'POST',
      body: JSON.stringify({email: email, password: password}),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    }) .then(
        (response) => response.json()
    ) .then((data) => {
        props.updateToken(data.sessionToken);
        props.updateEmail(data.user.email);
    })
  
  }
 
  return(
    <div className="logincontainer">
      <h1 className="logintitle">Login</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input onChange={(e) => setemail(e.target.value)} type="email" name="email" placeholder="Email" required/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input onChange={(e) => setpassword(e.target.value)} name="password" type="password" placeholder="Password" required/>
          </FormGroup>
            <div className="loginbtns">
              <Button className="loginbtn" class="fas fa-pencil-alt" type="submit">Login</Button>
              <Link to='/signup'>
              <Button type="button" className="signupswitch">Sign Up</Button>
              </Link>
            </div>
        </Form>
    </div>  
  )
}

export default Login;