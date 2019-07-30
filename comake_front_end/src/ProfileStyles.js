import React from 'react';
import { Card, Icon, Image, Table } from 'semantic-ui-react';
//edit icon
<i class="pencil alternate icon"></i>

// user card
<div class="ui card">
  <div class="image">
    <img class="ui avatar image" src="/images/avatar2/large/kristy.png" />
  </div>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="zip-code">Zip Code</span>
    </div>
    <div class="description">
      User Description
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
</div>




// list 
<table class="ui very basic collapsing celled table">
  <thead>
    <tr><th>Issues</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="/images/avatar2/small/lena.png" class="ui mini rounded image">
          <div class="content">
            Description
            <div class="sub header">Issue Description
          </div>
        </div>
      </h4></td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="/images/avatar2/small/matthew.png" class="ui mini rounded image">
          <div class="content">
            Description
            <div class="sub header">Issue Description
          </div>
        </div>
      </h4></td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="/images/avatar2/small/lindsay.png" class="ui mini rounded image">
          <div class="content">
            Description
            <div class="sub header">Issue Description
          </div>
        </div>
      </h4></td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="/images/avatar2/small/mark.png" class="ui mini rounded image">
          <div class="content">
            Description
            <div class="sub header">Issue Description
          </div>
        </div>
      </h4></td>
    </tr>
  </tbody>
</table>



{/* modal */}

import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample

