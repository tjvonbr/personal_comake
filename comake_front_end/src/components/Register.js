import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios';
import Logo from '../images/logo.png'


function Register(props) {
  const [inputData, setInputData] = useState({email: "", password:"", username:"", zipCode:""})

  const handleInput = e => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const loginHandler = e => {
    e.preventDefault()
    const url =
        "https://co-make.herokuapp.com/auth/register";
      axios
        .post(url, inputData)
        .then( res => {

          props.setMessage("Successfully Registered!")
          console.log("Success!", res)
          props.history.push("/");
        })

        .catch(err => {
          console.log("Register PROBLEM0", err);
        });
  }

  return (

    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={Logo} /> Create a new account
        </Header>
        <Header as="h4" color='green' textAlign='center'>{props.message}</Header>
        <Form size='large' onSubmit={loginHandler}>
          <Segment stacked>
            <Form.Input
            fluid icon='mail'
            name="email"
            value={inputData.email}
            onChange={handleInput}
            iconPosition='left'
            placeholder='E-mail address'
             />

            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              type='username'
              name="username"
              value={inputData.username}
              onChange={handleInput}
            />
            <Form.Input
              fluid
              icon='map'
              iconPosition='left'
              placeholder='Zipcode'
              type='zipCode'
              name="zipCode"
              value={inputData.zipCode}
              onChange={handleInput}
            />

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name="password"
              value={inputData.password}
              onChange={handleInput}
            />

            <Button type="submit" color='facebook' fluid size='large'>
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Return to Login?
          <Button className="register-button"
          onClick={()=> props.history.push('/login')}
          content='Back'
          positive
          size='mini' />
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Register
