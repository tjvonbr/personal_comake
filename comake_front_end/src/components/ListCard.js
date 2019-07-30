import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

function ListCard(props) {
  const [count, setCount] = useState(0);

  return (
    <ListCardWrapper>
      <ProjectDescription>
        <ProjectTitle>{props.data.issue_name}</ProjectTitle>
        <p>Categories:  {props.data.category}</p>
        <address>{props.data.zipCode}</address>
        <p>Description:  {props.data.description}</p>
      </ProjectDescription>
      <UpvoteCount>
        <span>
          <Icon name="arrow up" />
          <p>{count} upvotes</p>
        </span>
      </UpvoteCount>
    </ListCardWrapper>
  )
}

const ListCardWrapper = styled.section`
  padding: 30px 0px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`

const ProjectDescription = styled.div`
  margin-left: 200px;
  width: 50%;
`

const ProjectTitle = styled.p`
  margin: 0px;
  font-weight: bold;
`

const ProjectLocation = styled.address`
  margin: 0px;
`

const UpvoteCount = styled.div`
  margin-left: 200px;
  padding-top: 30px;
`

export default ListCard;