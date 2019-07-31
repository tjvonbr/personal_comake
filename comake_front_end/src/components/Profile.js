import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import EditProfile from './EditProfile';
import EditIssue from './EditIssue';
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
    const [currentUser, setCurrentUser] = useState("")
    const [isEditingUser, setIsEditingUser] = useState(false);
    const [isEditingIssue, setIsEditingIssue] = useState(false);
    const [issueToUpdate, setIssueToUpdate] = useState({})
    let token = JSON.parse(localStorage.getItem('token'))
    let localId = JSON.parse(localStorage.getItem('id'))

    useEffect(()=>{
        axios
           .get(`https://co-make.herokuapp.com/users/${localId}/issues`, {
              headers: {
                Authorization: token
              }
             })
            .then( res => {
            console.log("USER DATA FROM SERVER", res)
            setCurrentUser(res.data)
          })
            .catch( err => console.log("OH NO AN ERROR HAPPENED", err))
        },[])

        const handleEdit = e => {
          setIsEditingUser(!isEditingUser);
        };
        const handleEditIssue = id => {
          let thisIssue = currentUser.issues.filter( issue => issue.id === id);
          setIssueToUpdate(...thisIssue)
          setIsEditingIssue(!isEditingIssue)
        }

        const deleteIssue = id => {
          axios
            .delete(`https://co-make.herokuapp.com/issues/${id}`, {
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
                 setCurrentUser(res.data)
               }).catch( err => {
                 console.log("OH NO", err)
               })
            })
            .catch( err => {
              console.log("Error on delete", err)
            })

        }

    return (
      <>
        <Nav>
          <a href=''>Home</a>
          <a href=''>About Us</a>
        </Nav>
        <Container>

      { isEditingUser ? (
        <EditProfile
            handleEdit={handleEdit}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
             />
        )
        : isEditingIssue ? (
          <EditIssue
          setCurrentUser={setCurrentUser}
          setIsEditingIssue={setIsEditingIssue}
          isEditingIssue={isEditingIssue}
          issueToUpdate={issueToUpdate}

          />
        )
        : (
          <Body>
        <i class="pencil alternate icon" onClick={handleEdit}></i>
        <Card class ='card-style' header={currentUser.username} image={currentUser.image} meta={currentUser.zipCode} description={currentUser.email} />
        {/* <Table image={} content={}/>  */}
        { !currentUser.issues ? <p>Loading...</p>
        : currentUser.issues.map( issue =>
        <>
        <h4>{issue.issue_name}</h4>
        <p>{issue.desciption}</p>
        <button onClick={()=> deleteIssue(issue.id)}>delete</button>
        <button onClick={()=> handleEditIssue(issue.id)}>Edit</button>
        </>)}
          </Body>
        )
        }
       </Container>
      </>
    )

  }

  export default Profile;

