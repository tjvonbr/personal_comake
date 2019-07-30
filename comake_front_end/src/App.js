
import React, {useState} from 'react';
import List from './components/List';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { Route, Redirect } from 'react-router-dom';
import {useLocalStorage} from './hooks/useLocalStorage';

function App() {

  const [token, setToken] = useLocalStorage('token', '')
  const [localId, setLocalId] = useLocalStorage('id', '')
  const [message, setMessage] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <h1>Co-Make Front End</h1>
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
        {...props} />}
        />

      <Route path="/register" render={ props =>
        <Register setToken={setToken}
        message={message}
        setMessage={setMessage}
        {...props}
      />}/>

    </div>
  );
}

export default App;
