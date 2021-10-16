import React from 'react';

import { 
    Container, 
    ModalDiv, 
    Title, 
    Wrapper, 
    Row, 
    InputModal,
    Button,
    Footer
} from './styles';

const Modal: React.FC = () => {
  return(
    <Container>
        <ModalDiv>

            <Title>
                <h1>Cadastre sua conta</h1>
            </Title>

            <Wrapper>
                <Row>
                    <InputModal>
                        <input type="text" placeholder="Nome" />
                        <p>Insira seu nome completo</p>
                    </InputModal>   

                    <InputModal>
                        <input type="number" placeholder="CPF" />
                        <p>Insira seu CPF</p>
                    </InputModal>
                </Row>

                <Row>
                    <InputModal>
                        <input type="email" placeholder="Email"/>
                        <p>Insira seu email</p>
                    </InputModal>
                </Row>

                <Row>
                    <InputModal className="endereco">
                        <input  type="text" placeholder="Endereço (Opcional)"/>
                        <p>Insira seu endereço</p>
                    </InputModal>
                    
                    <InputModal>
                        <input type="number" placeholder="CEP(Opcional)"/>
                        <p>Insira seu CEP</p>
                    </InputModal>
                </Row>

                <Row>
                    <InputModal>
                        <input type="password" placeholder="Senha"/>
                        <p>Insira sua senha</p>
                    </InputModal>

                    <InputModal>
                        <input type="password" placeholder="Confirmar Senha "/>
                        <p>Confirme sua senha</p>
                    </InputModal>
                </Row>
            </Wrapper>
            <Button>
                Cadastrar
            </Button>
            <Footer>
                <p>Já possui uma conta? <a href="">Entre</a></p>
            </Footer>
        </ModalDiv>
    </Container>
  );
}

export default Modal;