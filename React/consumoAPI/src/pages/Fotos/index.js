import React, { useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';

export default function Fotos() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Fotos</Title>

      <Form>
        <input type="file"></input>
        <label></label>
      </Form>
    </Container>
  );
}
