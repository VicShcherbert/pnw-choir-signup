import React from 'react';
import { Message, Button } from 'semantic-ui-react';

export const WrongInformationEnglish = () => {
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

export const WrongInformationRussian = () => {
  return (
    <Message warning>
      <Message.Header>
        Внимание! На этой странице неправильная информация.
      </Message.Header>
      <p>
        Пока мы обновляем эту страницу, информация может быть не правильная.
        Пожалуйста зайдите позже.
      </p>
    </Message>
  );
};

export const RegisterBelowEnglish = () => {
  return (
    <Message positive>
      <Message.Header>Attention! Register below.</Message.Header>
      <p>After reading all the information, please register below.</p>
    </Message>
  );
};

export const RegisterBelowRussian = () => {
  return (
    <Message positive>
      <Message.Header>Внимание! Зарегистрируйтесь внизу.</Message.Header>
      <p>
        После того как вы прочитаете всю информацию, зарегистрируйтесь внизу
        страницы.
      </p>
    </Message>
  );
};

export const ClothesInfoUpdateEnglish = () => {
  return (
    <Message color='orange'>
      <Message.Header>Information has been updated!</Message.Header>
      <p>
        The information about what to wear has been updated.{' '}
        <a href='#clothesSection'>Please check it below</a>!
      </p>
    </Message>
  );
};

export const ClothesInfoUpdateRussian = () => {
  return (
    <Message color='orange'>
      <Message.Header>Информация была обновлена!</Message.Header>
      <p>
        Информация о том что надо одевать была обновлена.{' '}
        <a href='#clothesSection'>Посмотрите ниже</a>!
      </p>
    </Message>
  );
};
