import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; 

const Login = (props) => {
  const [email, setemail] = useState(''); 
  const [password, setpassword] = useState(''); 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/user/signin',{
      method: 'POST',
      body: JSON.stringify({email: email, password: password}),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    }) .then(
        (response) => response.json()
    ) .then((data) => {
        props.updateToken(data.sessionToken);
    })
  }
 
  return(
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input onChange={(e) => setemail(e.target.value)} name="email" value={email}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setpassword(e.target.value)} name="password" value={password}/>
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  )
}

export default Login;