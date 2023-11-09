import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email precisa ser válido!');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        nome, password, email
      });

      toast.success('Você fez seu cadastro');
      history.push('/login');
    } catch(err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map(error => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder=' '
          />
          <label htmlFor="nome" name="nome">Seu nome</label>
        </div>

        <div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder=' '
          />
          <label htmlFor="email" name="email">Seu email</label>
        </div>

        <div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder=' '
          />
          <label htmlFor="password" name="password">Sua senha</label>
        </div>

        <button type="submit">Criar</button>
      </Form>
    </Container>
  );
}
