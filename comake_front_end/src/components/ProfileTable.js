import React from 'react';
import { Table, Header, Image } from 'semantic-ui-react';
import ProfileTableRow from './ProfileTableRow';


function ProfileTable(props) {
    return (
    <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Issue</Table.HeaderCell>
        <Table.HeaderCell>Upvotes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    { !props.currentUser.issues ? <p>Loading...</p>
        : props.currentUser.issues.map( issue =>
          <ProfileTableRow issue={issue} handleEditIssue={props.handleEditIssue} deleteIssue={props.deleteIssue} />
        )}
    </Table.Body>
    </Table>
      )
}

export default ProfileTable;

