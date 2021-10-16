import React from 'react';


import { 
    Container, 
    SideImage, 
    LoginContainer, 
    Title, 
    Logo, 
    LoginBox, 
    Inputs, 
    Line,
    Button
} from './styles';

const PaginaLogin: React.FC = () => {
  return (
      <Container>
          <SideImage/>
          <LoginContainer>
              <Title>
                  <Logo />
                  <p>Vosweet</p>
                  <span>Uma mensagem em um click.</span>
              </Title>

              <LoginBox>
                  <p>Faça o login na sua conta!</p>
                  <Inputs>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                  </Inputs>
                  <Button>
                      Entrar
                  </Button>

                  <Line />

                  <span>Não tem uma conta? <a href="">Cadastre-se</a></span>
              </LoginBox>
          </LoginContainer>
      </Container>
  );
}

export default PaginaLogin;
