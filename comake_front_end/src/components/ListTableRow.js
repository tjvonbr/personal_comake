import React, { useState, useEffect } from 'react';
import { Table, Header, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';

function ListTableRow(props) {
    const [count, setCount] = useState(0);
    const [upvotes, setUpvotes] = useState(0)
    let token = JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
      axios
        .get(`https://co-make.herokuapp.com/upvotes/issue/${props.issue.id}`, {
          headers: {
            Authorization: token
          }
         })
        .then( res => {
          // let thisUser = res.data.filter( user => user.id === localId )
          console.log("upvote data", res)
          setUpvotes(res.data.upvotes);

      })
        .catch( err => console.log("OH NO AN ERROR HAPPENED", err))
    },[])

    let upvoteHandler = () => {
      console.log("User Id",props.issue.user_id)
      console.log("Issue Id",props.issue.id)
      console.log("token",token)
      axios
      .post('https://co-make.herokuapp.com/upvotes/issue',
      {
        user_id:  props.issue.user_id,
        issue_id: props.issue.id
      },{
          headers: {
            authorization: token
          }
        })
         .then(res => {
           console.log("UPVOTE SUCCESS", res)
           axios
        .get(`https://co-make.herokuapp.com/upvotes/issue/${props.issue.id}`, {
          headers: {
            Authorization: token
          }
         })
        .then( res => {
          // let thisUser = res.data.filter( user => user.id === localId )
          console.log("upvote data", res)
          setUpvotes(res.data.upvotes);

      })
        .catch( err => console.log("OH NO AN ERROR HAPPENED", err))

         })
         .catch(err => console.log("UPVOTE FAIL", err))
  }

    return (
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={props.issue.picture} rounded size='mini' />
            <Header.Content>
              {props.issue.issue_name}
              <Header.Subheader>{props.issue.description}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell textAlign="center">
          Category
        </Table.Cell>
        <Table.Cell>
            <UpvoteCount>

                <Icon className="arrow circle up" 
                      onClick={ upvoteHandler } />
                      {upvotes} upvotes
            </UpvoteCount> 

        </Table.Cell>
      </Table.Row>
      )
}

const UpvoteCount = styled.span`
  padding: 0;
`

export default ListTableRow;
