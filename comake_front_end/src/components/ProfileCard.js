import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const ProfileCard = (props) => (
  <Card>
    <Image src={props.currentUser.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.currentUser.username}</Card.Header>
      <Card.Meta>
        <span className='date'><i class="map pin icon"></i>{props.currentUser.zipCode}</span>
      </Card.Meta>
      <Card.Description>
        {props.currentUser.email}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        <i class="setting icon" onClick={props.dog}></i>
      </a>
    </Card.Content>
  </Card>
)

export default ProfileCard;