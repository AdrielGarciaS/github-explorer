import React from 'react';

import loading from '../assets/loading.svg';

import { Overlay, Container } from './styles';

export const Loading: React.FC = () => {
  return (
    <Overlay>
      <Container>
        <img src={loading} alt="Loading..." />
      </Container>
    </Overlay>
  );
};
