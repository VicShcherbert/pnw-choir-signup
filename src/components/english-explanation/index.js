import React from 'react';
import {
  Segment,
  Divider,
  Header,
  Button,
  List,
  Image,
} from 'semantic-ui-react';
import { Box } from 'theme-ui';
import GoogleMapsPic from '../../images/googlemaps.jpeg';
import GoogleMapsPic2 from '../../images/googlemaps2.png';
import AppleMapsPic from '../../images/applemaps.png';

export const EnglishExplanation = () => {
  return (
    <Box>
      <Segment color='green'>
        <Header as='h3' size='large'>
          What we are doing
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          We are singing as a choir at the California youth conference for the
          glory of God. We will be practicing songs seperately (Eastern
          Washington, Western Washington) and then will rehearse the songs
          together at the youth conference.
        </Box>
      </Segment>

      <Segment color='green'>
        <Header as='h3' size='large'>
          When we are singing
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          We will sing on the second day of the conference:{' '}
          <b>Sunday, May 30th, 2021</b>.<br />
          <br />
          Rehearsal will be at a bright and early <b>8am</b>.
        </Box>
      </Segment>

      <Segment color='green'>
        <Header as='h3' size='large'>
          Where we are singing
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          In the choir lolol.
          <br />
          <br />
          Dry Creek Church
          <br />
          4659 Dry Creek Road
          <br />
          Sacramento, CA 95838
          <br />
          <br />
          <Box sx={{ textAlign: 'center' }}>
            Directions:
            <br />
            <Image
              src={GoogleMapsPic2}
              size='tiny'
              href='https://goo.gl/maps/KHsPvzXgUcH7YqAHA'
              target='_blank'
            />
            <Image
              src={AppleMapsPic}
              size='tiny'
              href='https://maps.apple.com/?address=4659%20Dry%20Creek%20Rd,%20Sacramento,%20CA%20%2095838,%20United%20States&ll=38.653083,-121.438922&q=4659%20Dry%20Creek%20Rd&_ext=EiYpWGDZBwVTQ0AxXp4YhnVcXsA51jX/YytUQ0BBqCImD7lbXsBQBA%3D%3D'
              target='_blank'
            />
          </Box>
        </Box>
      </Segment>

      <Segment color='green'>
        <Header as='h3' size='large'>
          What we are singing
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          Below is a link to the songs that we will sing during the conference.
          There are two russian songs and two english song (one english song we
          will sing with orchestra):
          <br />
          <List bulleted>
            <List.Item>Поспеши, Боже</List.Item>
            <List.Item>You Are the Christ, the Son of God!</List.Item>
            <List.Item>Бог наш милостив</List.Item>
            <List.Item>In Christ Alone (with orchestra)</List.Item>
          </List>
          <Button
            href='https://drive.google.com/drive/folders/1svtc3TfieElbrANRA_etdiAqOVo6I5nz?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Sheet Music
          </Button>
        </Box>
      </Segment>

      <Segment color='green'>
        <Header as='h3' size='large'>
          What we will wear
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          We will wear <b>white top & black bottom</b>, not pink and purple with lime green
          dots or something like that.
        </Box>
      </Segment>
    </Box>
  );
};
