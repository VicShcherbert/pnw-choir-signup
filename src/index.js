import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Box } from 'theme-ui';
import {
  Segment,
  Button,
  Form,
  Header,
  Modal,
  Label,
  Image,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { EnglishExplanation } from '../src/components/english-explanation';
import { RussianExplanation } from '../src/components/russian-explanation';
import {
  RegisterBelowEnglish,
  RegisterBelowRussian,
  ClothesInfoUpdateEnglish,
  ClothesInfoUpdateRussian,
} from '../src/components/warnings';
import PNWChoirLogo from '../src/images/PNWChoir.jpg';

const App = () => {
  let audio = new Audio('/DTWrong.mp3');

  const startPlaying = () => {
    audio.play();
  };

  const [languageToggle, setLanguageToggle] = useState({
    displayEnglish: false,
    displayRussian: false,
  });

  const [submitDisplay, setSubmitDisplay] = useState(false);

  const turnOnEnglishHandler = () => {
    setLanguageToggle({
      displayEnglish: true,
      displayRussian: false,
    });
  };

  const turnOnRussianHandler = () => {
    setLanguageToggle({
      displayEnglish: false,
      displayRussian: true,
    });
  };

  const turnOnDisplay = () => {
    setSubmitDisplay({
      modalDisplayOn: true,
    });
  };

  const [partSinging, setPartSinging] = useState({
    part: '',
  });

  const [submission, setSubmission] = useState({
    firstName: '',
    lastName: '',
  });

  const { firstName, lastName } = submission;

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  var theName = '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('personsName', firstName);
    theName = localStorage.getItem('personsName');
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/vicshcherbert/google_sheets/PVgrkbBqzWnNrUuW?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([[firstName, lastName, partSinging]]),
        }
      );
      await response.json();
      setSubmission({ ...submission, firstName: '', lastName: '' });
      setPartSinging({ part: '' });
      // setFirstName({saveFirstName: ''});
    } catch (err) {
      console.log('There is a problem');
    }
  };

  return (
    <Segment basic>
      {languageToggle.displayEnglish !== true &&
      languageToggle.displayRussian !== true ? (
        <Segment basic textAlign='center'>
          <Box
            sx={{
              margin: '4px',
            }}
          >
            <Image
              src={PNWChoirLogo}
              size='medium'
              verticalAlign='middle'
            ></Image>
          </Box>
          <Button onClick={turnOnEnglishHandler} size='large'>
            English
            <br />
            language
          </Button>
          <Button onClick={turnOnRussianHandler} size='large'>
            ??????????????
            <br />
            ????????
          </Button>
        </Segment>
      ) : (
        <Segment basic>
          <Header as='h1' textAlign='center'>
            2021 Youth Conference PNW Choir Sign-Up
          </Header>
          <Box sx={{textAlign: 'center', paddingTop: '15px'}}>
            <Button onClick={turnOnEnglishHandler} size='large'>
              English
              <br />
              language
            </Button>
            <Button onClick={turnOnRussianHandler} size='large'>
              ??????????????
              <br />
              ????????
            </Button>
          </Box>
        </Segment>
      )}

      {languageToggle.displayEnglish ? (
        <Segment basic>
          {/* <WrongInformationEnglish /> */}
          {/* <ClothesInfoUpdateEnglish/> */}
          <RegisterBelowEnglish />
          <EnglishExplanation />
          <Header as='h2' size='large'>
            Register
          </Header>
          <Segment color='green'>
            <Box
              sx={{
                fontSize: '16px',
              }}
            >
              In order to figure out how many people will be singing and how
              many folders we need, please, register below
            </Box>
          </Segment>

          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Header as='h4' size='medium'>
                First Name
              </Header>
              <input
                placeholder='First Name'
                value={firstName}
                name='firstName'
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Header as='h4' size='medium'>
                Last Name
              </Header>
              <input
                placeholder='Last Name'
                value={lastName}
                name='lastName'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Group grouped>
              <Header as='h4' size='medium'>
                What part do you sing?
              </Header>

              <Form.Radio
                label='Soprano'
                checked={partSinging === 'Soprano'}
                value='Soprano'
                onClick={() => setPartSinging('Soprano')}
                size='massive'
              />
              <Form.Radio
                label='Alto'
                checked={partSinging === 'Alto'}
                value='Alto'
                onClick={() => setPartSinging('Alto')}
              />
              <Form.Radio
                label='Tenor'
                checked={partSinging === 'Tenor'}
                value='Tenor'
                onClick={() => setPartSinging('Tenor')}
              />
              <Form.Radio
                label='Bass'
                checked={partSinging === 'Bass'}
                value='Bass'
                onClick={() => setPartSinging('Bass')}
              />
            </Form.Group>
            {submission.firstName !== '' &&
            submission.lastName !== '' &&
            partSinging.part !== '' ? (
              <Button color='green' type='submit' onClick={turnOnDisplay}>
                Submit
              </Button>
            ) : (
              <Label
                basic
                color='black'
                size='large'
                style={{ height: '36px', paddingTop: '10px' }}
              >
                Fill in all fields
              </Label>
            )}

            {submitDisplay.modalDisplayOn ? (
              <Modal open>
                <Modal.Header>Success!</Modal.Header>
                <Modal.Content>
                  <Box sx={{ fontSize: '16px' }}>
                    Thanks {theName} for registering! See you at the conference!
                  </Box>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='red' onClick={startPlaying}>
                    Speak to the manager
                  </Button>
                  <Button color='green' onClick={() => setSubmitDisplay(false)}>
                    Close
                  </Button>
                </Modal.Actions>
              </Modal>
            ) : null}
          </Form>
        </Segment>
      ) : null}

      {languageToggle.displayRussian ? (
        <Segment basic>
          {/* <WrongInformationRussian /> */}
          {/* <ClothesInfoUpdateRussian /> */}
          <RegisterBelowRussian />
          <RussianExplanation />
          <Header as='h2' size='large'>
            ??????????????????????
          </Header>
          <Segment color='green'>
            <Box
              sx={{
                fontSize: '16px',
              }}
            >
              ?????????? ???????????? ?????????????? ?????????? ?????????? ???????? ?? ?????????????? ?????????? ????????
              ??????????????????????, ????????????????????, ?????????????????????????????????? ??????????.
            </Box>
          </Segment>

          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Header as='h4' size='medium'>
                ??????
              </Header>
              <input
                placeholder='??????'
                value={firstName}
                name='firstName'
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Header as='h4' size='medium'>
                ??????????????
              </Header>
              <input
                placeholder='??????????????'
                value={lastName}
                name='lastName'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Group grouped>
              <Header as='h4' size='medium'>
                ?????????? ???????????? ???? ???????????
              </Header>

              <Form.Radio
                label='??????????????'
                checked={partSinging === 'Soprano'}
                value='Soprano'
                onClick={() => setPartSinging('Soprano')}
                size='massive'
              />
              <Form.Radio
                label='????????'
                checked={partSinging === 'Alto'}
                value='Alto'
                onClick={() => setPartSinging('Alto')}
              />
              <Form.Radio
                label='??????????'
                checked={partSinging === 'Tenor'}
                value='Tenor'
                onClick={() => setPartSinging('Tenor')}
              />
              <Form.Radio
                label='??????'
                checked={partSinging === 'Bass'}
                value='Bass'
                onClick={() => setPartSinging('Bass')}
              />
            </Form.Group>
            {submission.firstName !== '' &&
            submission.lastName !== '' &&
            partSinging.part !== '' ? (
              <Button color='green' type='submit' onClick={turnOnDisplay}>
                ??????????????????
              </Button>
            ) : (
              <Label
                basic
                color='black'
                size='large'
                style={{ height: '36px', paddingTop: '10px' }}
              >
                ?????????????????? ?????? ????????
              </Label>
            )}

            {submitDisplay.modalDisplayOn ? (
              <Modal open>
                <Modal.Header>Success!</Modal.Header>
                <Modal.Content>
                  <Box sx={{ fontSize: '16px' }}>
                    ?????????????? ?????? ???? ????????????????????????????????????! ???????????????? ???? ??????????????????????!
                  </Box>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='red' onClick={startPlaying}>
                    ???????????????????? ?? ????????????????????
                  </Button>
                  <Button color='green' onClick={() => setSubmitDisplay(false)}>
                    ??????????????
                  </Button>
                </Modal.Actions>
              </Modal>
            ) : null}
          </Form>
        </Segment>
      ) : null}
    </Segment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
