import React, {useState, useEffect} from 'react';
import { Table, Header, Image } from 'semantic-ui-react';



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
        <Table.Cell>Upvotes<button onClick={()=> props.deleteIssue(props.issue.id)}>delete</button>
        <button onClick={()=> props.handleEditIssue(props.issue.id)}>Edit</button></Table.Cell>
      </Table.Row>
      )
}

export default ProfileTableRow;

