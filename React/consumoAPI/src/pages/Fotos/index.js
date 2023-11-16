import React, { useState, useEffect } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';
import { Title, Form } from './styled';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/Auth/actions';

export default function Fotos({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');

  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Images[0].url', ''));
        setIsLoading(false);
      } catch {
        toast.error('Erro ao exibir a imagem');
        setIsLoading(false);
        history.push('/');
      }
    };

    getData();
  }, [id]);

  const handleChange = async (e) => {
    const foto = e.target.files[0];
    const fotoUrl = URL.createObjectURL(foto);

    setFoto(fotoUrl);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('image', foto);

    try {
      setIsLoading(true);

      await axios.post('/images/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Sua imagem foi alterada!');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);

      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar foto');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img crossOrigin="" src={foto} alt="Foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
