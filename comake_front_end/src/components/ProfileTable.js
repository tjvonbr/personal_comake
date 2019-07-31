import React from 'react';
import { Table, Header, Image } from 'semantic-ui-react';



function ProfileTable() {    
    return (
    <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Issue</Table.HeaderCell>
        <Table.HeaderCell>Upvotes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='' rounded size='mini' />
            <Header.Content>
              Issue Title
              <Header.Subheader>Issue Description</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Upvotes</Table.Cell>
      </Table.Row>
      </Table.Body>
    </Table>
      )
}

export default ProfileTable;