import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; //1

const Signup = (props) => {
  const [email, setemail] = useState(''); //1
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/api/user/signup", { //1
      method: 'POST', //2
      body: JSON.stringify({email: email, fName: fName, lName: lName, password: password}), //3
      headers: new Headers({
          'Content-Type': 'application/json' //4
      })
    }).then(
        (response) => response.json() //5
    ).then((data) => {
        props.updateToken(data.sessionToken) //6
    })
  }

  return(
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input onChange={(e) => setemail(e.target.value)} name="email" value={email}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="fName">First Name</Label>
          <Input onChange={(e) => setfName(e.target.value)} name="fName" value={fName}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lName">Last Name</Label>
          <Input onChange={(e) => setlName(e.target.value)} name="lName" value={lName}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  )
}

export default Signup;