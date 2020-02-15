import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap'; //1
import APIURL from '../helpers/environment';
import '../App.css'
import { Link } from 'react-router-dom';


const Signup = (props) => {


  const [email, setemail] = useState(''); //1
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [password, setPassword] = useState('');


  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}api/user/signup`,{ //1
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
      <h1 className="signuptitle">Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input onChange={(e) => setemail(e.target.value)} type="email" name="email" placeholder="Email" required/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="fName">First Name</Label>
          <Input onChange={(e) => setfName(e.target.value)} name="fName" placeholder="First Name" required/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lName">Last Name</Label>
          <Input onChange={(e) => setlName(e.target.value)} name="lName" placeholder="Last Name" required/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password (Min. Length: 5)" minLength="5" required/>
        </FormGroup>
        <div className="signupbtn1">
          <Button className="signupbtn" type="submit">Sign Up</Button>
          <Link to='/'>
          <Button className="loginbtn">Back to Login</Button>
          </Link>
        </div>
      </Form>
    </div>
  )
}

export default Signup;