
import React, {useState} from 'react';
import List from './components/List';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import AddIssue from './components/AddIssue';
import { Route, Redirect } from 'react-router-dom';
import {useLocalStorage} from './hooks/useLocalStorage';
import styled from 'styled-components';

function App() {

  const [token, setToken] = useLocalStorage('token', '')
  const [localId, setLocalId] = useLocalStorage('id', '')
  const [zipCode, setZipCode] = useLocalStorage('zipcode', '')
  const [message, setMessage] = useState('')

  const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #5477BB;
  font-family: 'helvetica', sans serif;
  a {color:#FFFF;}
  height: 90px;
  font-size: 1.2rem;
  font-weight: bold;
  `

  return (
    <div className="App">

      <header className="App-header">
      <Nav>
          <img src='/images/logo.png' />
          <a href='https://flamboyant-mayer-055230.netlify.com/index.html'>Home</a>
          <a href='https://flamboyant-mayer-055230.netlify.com/aboutus.html'>About Us</a> 
          <button>Logout</button>                  
        </Nav>
      </header>
      


      {/* ROUTES  */}

      <Route exact path="/" render={ props =>
          localStorage.getItem("token") ? (
            <List {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }/>
      <Route exact path="/profile/:id" render={ props =>
          localStorage.getItem("token") ? (
            <Profile {...props} />
          ) : (
            <Redirect to="/login" />
          )
        } />
      <Route exact path="/login" render={ props =>
        <Login setToken={setToken}
        setLocalId={setLocalId}
        message={message}
        setMessage={setMessage}
        setZip={setZipCode}
        {...props} />}
        />

      <Route path="/register" render={ props =>
        <Register setToken={setToken}
        message={message}
        setMessage={setMessage}
        {...props}
      />}/>

      <Route path="/addIssue" render={ props =>
        <AddIssue setToken={setToken}
        message={message}
        setMessage={setMessage}
        {...props} />}
      />

    </div>
  );
}

export default App;
