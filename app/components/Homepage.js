'use strict';
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Embed
} from 'semantic-ui-react';
import Contact from './Contact';
import GetStarted from './GetStarted';

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' href="/" active>Home</Menu.Item>
      <Menu.Item as='a' href="https://www.flickr.com/photos/raviolisauce/albums">Photography</Menu.Item>
      <Menu.Item as='a'>Software Development</Menu.Item>
      <Menu.Item as='a' href="https://github.com/evanchen7">GitHub</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Contact />
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
  }


  hideFixedMenu(){
    this.setState({ visible: false });
  }
  showFixedMenu(){
    this.setState({ visible: true });
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' href="/" active>Home</Menu.Item>
                <Menu.Item as='a' href="https://www.flickr.com/photos/raviolisauce/albums">Photography</Menu.Item>
                <Menu.Item as='a'>Software Development</Menu.Item>
                <Menu.Item as='a' href="https://github.com/evanchen7">GitHub</Menu.Item>
                <Menu.Item position='right'>
                  <Contact />
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='evanchen.io'
                inverted
                style={{ fontSize: '5em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em' }}
              />
              <Header
                as='h2'
                content='Photography Services and Software Development'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
            <GetStarted />
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8} stretched={true}>
                <Header as='h3' style={{ fontSize: '2em' }}>Photobooth</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Professional studio quality photobooth delivered throughout the San Francisco Bay Area. Open air setup allows for large groups to join in on the fun.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Corporate Headshots</Header>
                <p style={{ fontSize: '1.33em' }}>
                  In business, an image can be the difference between making the sale and missing the opportunity. High-quality, professional business photos capture the attention of your clients by adding instant personality to marketing materials, public relations efforts, social media and more.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={8} stretched={true}>
                <Embed
                  active={true}
                  autoplay={true}
                  iframe={{
                    align:"center",
                    frameBorder:"0",
                    width:"500",
                    height:"500",
                    src:'http://flickrslidr.com/slideshow/view.php?g=TrJeek'
                  }}
                  />


              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Placeholder</List.Item>
                    <List.Item as='a'>Placeholder</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Miscellaneous' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Evan Chen Photography</Header>
                  <p>Over 10 years of Photography experience with two years of full stack development</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
