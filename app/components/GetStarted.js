import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

const GetStarted = () => (
  <Modal trigger={<Button as='a' inverted size='huge' >Get Started<Icon name='right arrow' /></Button>}>
    <Modal.Header>Contact Information</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://farm5.staticflickr.com/4679/38485082385_521865773c_o.png' />
      <Modal.Description>
        <Header>Photography Services</Header>
        <ul>Email: evanchensf@gmail.com</ul>
        <ul>Facebook: 'https://www.facebook.com/evanchenphotography/'</ul>
        <Header>Web Development</Header>
        <ul>Github: 'https://github.com/evanchen7'</ul>
        <ul>AngelList: 'https://angel.co/evanchen7'</ul>
        <ul>Linkedin: 'https://www.linkedin.com/in/evanchensf/'</ul>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
export default GetStarted
