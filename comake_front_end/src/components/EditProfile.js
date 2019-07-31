import React, {useState} from 'react'
import axios from 'axios';

function EditProfile(props) {
    const [input, setInput] = useState({
        email: props.currentUser.email,
        image: props.currentUser.image,
        zipCode: props.currentUser.zipCode,
        username: props.currentUser.username,
        password: props.currentUser.password

      });
    const updateHandler = e => {
        e.preventDefault();
        updateUser(input);
        props.handleEdit();
      };

      const handleInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };

      const updateUser = () => {
        let token = JSON.parse(localStorage.getItem('token'))
        let localId = JSON.parse(localStorage.getItem('id'))
        console.log("input", input)
        axios
           .put(`https://co-make.herokuapp.com/users/${localId}`, input, {
              headers: {
                Authorization: token
              }
             })
            .then( res => {
            props.setCurrentUser(res.data)
          })
            .catch( err => console.log("OH NO AN ERROR HAPPENED", err))
      }

    return (
        <div>
          <div>
          <h1>Edit</h1>
          <form onSubmit={updateHandler}>
            <div>
              <label htmlFor="username">
                Name:{" "}
                <input
                  type="text"
                  value={input.username}
                  name="username"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="image">
                Image:{" "}
                <input
                  type="text"
                  value={input.image}
                  name="image"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="email">
                Email:{" "}
                <input
                  type="text"
                  value={input.email}
                  name="email"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="location">
                Location:{" "}
                <input
                  type="text"
                  value={input.zipCode}
                  name="zipCode"
                  onChange={handleInput}
                />
              </label>
            </div>

            <button>Update User</button>
          </form>
          <button onClick={props.handleEdit}>go back</button>
        </div>
        </div>
    )
}

export default EditProfile
