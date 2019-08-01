import React from 'react';
import { Table, Header, Image } from 'semantic-ui-react';
import ProfileTableRow from './ProfileTableRow';
import styled from 'styled-components';

const PTable = styled.table` 
    width: 400px;
    margin-bottom: 10px;
    padding: 10px;


`

function ProfileTable(props) {
    return (
    <PTable basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Issue</Table.HeaderCell>
        {/* <Table.HeaderCell>Upvotes</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>
    { !props.currentUser.issues ? <p>Loading...</p>
        : props.currentUser.issues.map( issue =>
          <ProfileTableRow issue={issue} handleEditIssue={props.handleEditIssue} deleteIssue={props.deleteIssue} />
        )}
    </Table.Body>
    </PTable>
      )
}

export default ProfileTable;

