import React from 'react';
import { Table, Header, Image } from 'semantic-ui-react';
import ListTableRow from './ListTableRow';

function ListTable(props) {
    return (
    <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Issue</Table.HeaderCell>
        <Table.HeaderCell>Upvotes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {/* { issues.map( issue => <ListCard key={issue.id} data={issue}  /> )}     */}
    { props.issues &&  props.issues.map( issue =>
          <ListTableRow issue={issue} />
        )}
    </Table.Body>
    </Table>
      )
}

export default ListTable;

