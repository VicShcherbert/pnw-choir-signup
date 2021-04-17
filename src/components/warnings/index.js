import React from 'react';
import { Message } from 'semantic-ui-react';

export const WrongInformation = () => {
  return (
    <Message warning>
      <Message.Header>
        Attention! This page has incorrect information.
      </Message.Header>
      <p>
        While we update this webpage, there may be information that is not
        correct. Please check back later.
      </p>
    </Message>
  );
};
