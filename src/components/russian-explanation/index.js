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

export const RussianExplanation = () => {
  return (
    <Box>
      <Segment color='green'>
        <Header as='h3' size='large'>
          Что мы делаем
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          Мы будем петь хором на Калифорнийском молодёжном общении во славу
          Богу. Мы будем репетировать песни по отдельности (Eastern Washington,
          Western Washington) и потом будем вместе репетировать песни на
          молодежной конференции.
        </Box>
      </Segment>

      <Segment color='green'>
        <Header as='h3' size='large'>
          Когда мы поём
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          Мы будем петь на второй день конференции:{' '}
          <b>Воскресение, май 30ого, 2021</b>
          <br />
          <br />
          Спевка будет утро в <b>8am</b>.
        </Box>
      </Segment>

      <Segment color='green'>
        <Header as='h3' size='large'>
          Где мы поём
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          В хору лол:)
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
          Что мы поём
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          Внизу ссылка на песни которые мы будем петь на конференции.
          Мы споём две русские песни и две американские песни (одну будем петь с
          оркестром):
          <br />
          <List bulleted>
            <List.Item>Поспеши, Боже</List.Item>
            <List.Item>You Are the Christ, the Son of God!</List.Item>
            <List.Item>Бог наш милостив</List.Item>
            <List.Item>In Christ Alone (с оркестром)</List.Item>
          </List>
          <Button
            href='https://drive.google.com/drive/folders/1svtc3TfieElbrANRA_etdiAqOVo6I5nz?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Ноты
          </Button>
        </Box>
      </Segment>

      <Segment color='green'>
        <Header as='h3' size='large'>
          Что мы будем одевать
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          <b>Черная и белая</b> форма.
        </Box>
      </Segment>

      <Segment color='black'>
        <Header as='h3' size='large'>
          Пение на сонференции по благовестию
        </Header>
        <Divider />
        <Box
          sx={{
            fontSize: '16px',
          }}
        >
          В <b>субботу, 15ого мая</b>, будет конференция по благовестию.
          У нас будет репретиция в <b>сометчинг пм</b> и мы будем петь на конференции
          которая начинается в <b>сометчинг пм</b>.
          <br />
          <br />
          На следующий день, <b>Воскресение, 16ого мая</b>, мы будем петь в поместной церкви
          на утрешнем служении.
          <br />
          <br />
          Это поможет нам подготовиться к участию на Калифорнийской конференции!
        </Box>
      </Segment>
    </Box>
  );
};
