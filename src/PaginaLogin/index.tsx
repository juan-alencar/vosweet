import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Modal from '../Modal';

import {
  Container,
  SideImage,
  LoginContainer,
  Title,
  Logo,
  LoginBox,
  Inputs,
  Line,
  Button,
} from './styles';

interface LogInValidation {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('Email é obrigatório'),

    password: yup.string().required('A Senha é obrigatória'),
  })
  .required();

const PaginaLogin: React.FC = () => {
  //Validação de dados do Yup e React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInValidation>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: LogInValidation) => console.log(data);

  //Lógica Toggle do Modal
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <Container>
      <Modal onClose={toggleModal} isOpen={isModalOpen} />
      <SideImage />

      <LoginContainer>
        <Title>
          <Logo />
          <p>Vosweet</p>
          <span>Uma mensagem em um click.</span>
        </Title>

        <LoginBox>
          <p>Faça o login na sua conta!</p>

          <Inputs onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} placeholder="Email" />
            <p>{errors.email?.message}</p>

            <input
              {...register('password')}
              placeholder="Senha"
              type="password"
            />
            <p>{errors.password?.message}</p>

            <Button type="submit">Entrar</Button>
          </Inputs>

          <Line />

          <span>
            Não tem uma conta?{' '}
            <button onClick={toggleModal}>Cadastre-se</button>
          </span>
        </LoginBox>
      </LoginContainer>
    </Container>
  );
};

export default PaginaLogin;
<button> magica</button>;
