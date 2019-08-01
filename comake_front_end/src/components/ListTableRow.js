import React, { useState } from 'react';
import { Table, Header, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

function ListTableRow(props) {
    const [count, setCount] = useState(0);
    
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
            <UpvoteCount>
                <Icon className="arrow circle up" onClick={ () => setCount(count + 1)} />
                {count} upvotes
            </UpvoteCount> 
        </Table.Cell>
      </Table.Row>
      )
}

const UpvoteCount = styled.span`
  padding: 0;
`

export default ListTableRow;
