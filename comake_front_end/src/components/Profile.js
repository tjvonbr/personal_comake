import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import EditProfile from './EditProfile';

function Profile(props) {
    const [currentUser, setCurrentUser] = useState("")
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = e => {
      setIsEditing(!isEditing);
    };

    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('token'))
        let localId = JSON.parse(localStorage.getItem('id'))
        axios
           .get(`https://co-make.herokuapp.com/users/${localId}/issues`, {
              headers: {
                Authorization: token
              }
             })
            .then( res => {
            console.log(res)
            setCurrentUser(res.data)
          })
            .catch( err => console.log("OH NO AN ERROR HAPPENED", err))
        },[])

    return (
      <>
      { !isEditing ? (
          <div>
          <h2>Username:</h2>
          <p>{currentUser.username}</p>
          <h2>Image:</h2>
          <p>{currentUser.image}</p>
          <h2>Email: </h2>
          <p>{currentUser.email}</p>
          <h2>Location(Zipcode):</h2>
          <p>{currentUser.zipCode}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
        ) : <EditProfile
            handleEdit={handleEdit}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
             />
        }
      </>
    )
  }

  export default Profile;

