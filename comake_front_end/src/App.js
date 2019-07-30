import React, { useState } from "react";
import List from './components/List';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { Route } from 'react-router-dom';

function App() {
  
    
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Co-Make Front End</h1>
      </header>
       {/* {users.map(user => (
            <User user={user} updateUser={updateUser} />
          ))}  */}
           {/* <Profile addUser={addUser} />  */}
    <Route exact path="/" component={List}/>
    <Route exact path="/profile/:id" component={Profile} />
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    </div>
  );
}

export default App;
