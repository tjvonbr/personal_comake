import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Icon, Image, Table } from 'semantic-ui-react';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
justify-content: center;

`
const Body = styled.div`
flex-direction: column;

`
const Nav = styled.nav`
background-color: #99AAE7;
font-family: "helvetica", sans serif;
a {color:#FFFF;}
`



function Profile(props) {
    const [users, setUsers] = useState([{username: "jessica", image: "", location: "89145", id: 1 }]);
    const [currentUser, setCurrentUser] = useState({username: "", image: "", location: "", id: null })
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState({
      name: currentUser.name,
      image: currentUser.image,
      location: currentUser.location,
      id: currentUser.id
    });
    const handleInput = e => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
    
    const handleEdit = e => {
      setIsEditing(!isEditing);
    };

    const updateHandler = e => {
      e.preventDefault();
      updateUser(input);
      setIsEditing(!isEditing);
    };
    
      const updateUser = uUser =>
        setUsers ([
          ...users.map(user => {
            if (user.id === uUser.id) {
              return uUser;
            }
            return user;
          })
        ]);
        
        useEffect(()=>{
          let token = JSON.parse(localStorage.getItem('token'))
          let localId = JSON.parse(localStorage.getItem('id'))
          axios
            .get('https://co-make.herokuapp.com/users/1/issues', {
              headers: {
                Authorization: token
              }
             })
            .then( res => {
              
              let thisUser = res.data.filter( user => user.id === localId )
              // console.log("Current User", thisUser)
            setCurrentUser(thisUser)
          })
            .catch( err => console.log("OH NO AN ERROR HAPPENED", err))
        },[])

  // Editing form
    if (isEditing) {
      return (
        <div>
          <h1>Edit</h1>
          <form onSubmit={updateHandler}>
            <div>
              <label htmlFor="name">
                Name:{" "}
                <input
                  type="text"
                  value={currentUser.username}
                  name="name"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="image">
                Image:{" "}
                <input
                  type="text"
                  value={currentUser.image}
                  name="image"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="email">
                Email:{" "}
                <input
                  type="text"
                  value={currentUser.email}
                  name="email"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="location">
                Location:{" "}
                <input
                  type="text"
                  value={currentUser.location}
                  name="location"
                  onChange={handleInput}
                />
              </label>
            </div>
  
            <button>Update User</button>
          </form>
          <button onClick={handleEdit}>go back</button>
        </div>
      );
    }
    // 
    return (
<>       <Nav>
          <a href=''>Home</a>
          <a href=''>About Us</a>                   
          </Nav>
      <Container>
          
      
      <Body>         
        <i class="pencil alternate icon" onClick={handleEdit}></i>
          
        <Card class ='card-style' header={'jessica'} image={'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'} meta={'89145'} description={'jessica@yahoo.com'} />
        {/* <Table image={} content={}/>  */}
      </Body> 
      </Container>
       

    </>
    );
  }
  
  export default Profile;
  
