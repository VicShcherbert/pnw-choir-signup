import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Segment, Button, Form, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [submission, setSubmission] = useState({
    firstName: '',
    lastName: '',
    age: '',
  });

  const { firstName, lastName, age } = submission;

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(submission);

    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/vicshcherbert/google_sheets/PVgrkbBqzWnNrUuW?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([[firstName, lastName, age]]),
        }
      );
      await response.json();
      setSubmission({ ...submission, firstName: '', lastName: '', age: '' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Segment>
      <Header as='h1' textAlign='center'>
        2021 Youth Conference Choir PNW Sign-Up
      </Header>
      <Segment basic textAlign="center">
        <Button>Русский язык</Button>
        <Button>English language</Button>
      </Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            value={firstName}
            name='firstName'
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='Last Name'
            value={lastName}
            name='lastName'
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            placeholder='Age'
            value={age}
            name='age'
            onChange={handleChange}
          />
        </Form.Field>

        <Button color='blue' type='submit'>
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
