import React, {useState, useEffect} from 'react'
import axios from 'axios'

function EditIssue(props) {
    const [input, setInput] = useState({
        issue_name: props.issueToUpdate.issue_name,
        picture: props.issueToUpdate.picture,
        description: props.issueToUpdate.description,
        category: props.issueToUpdate.category,
        completed: false,
        user_id: props.issueToUpdate.user_id,
        id: props.issueToUpdate.id,
        zipCode: props.issueToUpdate.zipCode

    });


    const updateHandler = e => {
        e.preventDefault();
        updateIssue(input);
        props.setIsEditingIssue(!props.isEditingIssue)
      };

      const handleInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };

      const updateIssue = () => {
        let token = JSON.parse(localStorage.getItem('token'))
        let localId = JSON.parse(localStorage.getItem('id'))
        console.log("input", input)
        axios
           .put(`https://co-make.herokuapp.com/issues/${props.issueToUpdate.id}`, input, {
              headers: {
                Authorization: token
              }
             })
            .then( res => {
                axios.get(`https://co-make.herokuapp.com/users/${localId}/issues`, {
                    headers: {
                      Authorization: token
                    }
                   }).then( res => {
                     console.log("NEW DATA FROM SERVER", res)
                     props.setCurrentUser(res.data)
                   }).catch( err => {
                     console.log("OH NO", err)
                   })
          })
            .catch( err => console.log("OH NO AN ERROR HAPPENED", err))
      }

    return (
        <div>
          <div>
          <h1>Edit</h1>
          <form onSubmit={updateHandler}>
            <div>
              <label htmlFor="issue_name">
                Issue Name:{" "}
                <input
                  type="text"
                  value={input.issue_name}
                  name="issue_name"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="picture">
                Picture:{" "}
                <input
                  type="text"
                  value={input.picture}
                  name="picture"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="description">
                Description:{" "}
                <input
                  type="text"
                  value={input.description}
                  name="description"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="category">
                Category:{" "}
                <input
                  type="text"
                  value={input.category}
                  name="category"
                  onChange={handleInput}
                />
              </label>
            </div>

            <button>Update User</button>
          </form>
          <button onClick={()=>props.setIsEditingIssue(!props.isEditingIssue)}>Back</button>
        </div>
        </div>
    )
}

export default EditIssue
