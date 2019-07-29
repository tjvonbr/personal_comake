import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Profile(props) {
    const [users, setUsers] = useState([{username: "jessica", image: "", location: "89145", id: 1 }]);
    const [currentUser, setCurrentUser] = useState({username: "jessica", image: "", location: "89145", id: 1 })
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

  // Render Component if Editing or Not
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
    // Not Editing
    return (
      
        <div>
        <h2>Name:</h2>
        <p>{currentUser.username}</p>
        <h2>Image:</h2>
        <p>{currentUser.image}</p>
        <h2>Location:</h2>
        <p>{currentUser.location}</p>
        <button onClick={handleEdit}>Edit</button>
      </div> 
      
    );
  }
  
  export default Profile;
  
