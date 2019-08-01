import React from 'react';
import { Table, Header, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

// const Row = styled.div`
// width: 100px;
// `

function ProfileTableRow(props) {
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
        <Table.Cell>
            Upvotes
        <i className="pencil alternate icon" onClick={()=> props.handleEditIssue(props.issue.id)}></i>
        <i className="trash alternate outline icon" onClick={()=> props.deleteIssue(props.issue.id)}></i>
        
        </Table.Cell>
      </Table.Row>
      )
}



{/* <button onClick={()=> props.deleteIssue(props.issue.id)}>delete</button>
<button onClick={()=> props.handleEditIssue(props.issue.id)}>Edit</button> */}

export default ProfileTableRow;

