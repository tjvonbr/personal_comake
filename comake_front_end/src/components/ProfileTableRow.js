import React from 'react';
import { Table, Header, Image } from 'semantic-ui-react';



function ProfileTableRow() {    
    return (
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
      )
}

export default ProfileTable;