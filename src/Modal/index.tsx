import React from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { 
    Container, 
    ModalDiv, 
    Title,
    SignUpForm, 
    Wrapper, 
    Row, 
    InputModal,
    Button,
    Footer
} from './styles';

interface SignUpFormValidation {
    nome: string
    email: string
    cpf: string
    endereco: string
    cep: string
    password: string
    confirmPassword: string
  }


const uppercaseRegex =  /(?=.*[A-Z])/;
// const numericRegex =  /(?=.*[0-9])/;  

const schema = yup.object({
    nome: yup.string()
    .max(100, 'Limite de 100 caracteres')
    .uppercase()
    .required('O Nome é obrigatório'),

    email: yup.string()
    .email('Digite um email válido')
    .max(100, 'Limite de 100 caracteres')
    .required('O Email é obrigatório'),

    cpf: yup.string()
    .min(11, 'Mínimo de 11 números')
    .max(11, 'Limite de 11 números')
    .required('O CPF é obrigatório'),

    endereco: yup.string(),

    cep: yup.string()
    .max(8, 'Limite de 8 caracteres'),
    
    
    password: yup.string()
    .matches(uppercaseRegex, 'Ao menos uma letra maiúscula')
    .min(6, 'Mínimo de 6 caracteres')
    .max(50, 'Limite de 50 caracteres')
    .required('Senha é obrigatória'),

    confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas não são iguais')
    .required('É obrigatório confirmar a senha'),
}).required();

const Modal: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormValidation>({
        resolver: yupResolver(schema)
        });
    const onSubmit = (data: SignUpFormValidation) => console.log(data);
    return( 
        <Container>
            <ModalDiv>

                <Title>
                <h1>Cadastre sua conta</h1>
                </Title>

                <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                <Wrapper>
                    <Row>
                        <InputModal>
                            <input {...register("nome")} className="nome" type="text" placeholder="Nome" />
                            <p>{errors.nome?.message}</p>
                        </InputModal>   

                        <InputModal>
                            <input {...register("cpf")} type="number" placeholder="CPF" />
                            <p>{errors.cpf?.message}</p>
                        </InputModal>
                    </Row>

                    <Row>
                        <InputModal>
                            <input {...register("email")} type="email" placeholder="Email"/>
                            <p>{errors.email?.message}</p>
                        </InputModal>
                    </Row>

                    <Row>
                        <InputModal className="endereco">
                            <input  {...register("endereco")} type="text" placeholder="Endereço (Opcional)"/>
                            <p>{errors.endereco?.message}</p>
                        </InputModal>

                        <InputModal>
                            <input {...register("cep")}  type="number" placeholder="CEP(Opcional)"/>
                            <p>{errors.cep?.message}</p>
                        </InputModal>
                    </Row>

                    <Row>
                        <InputModal>
                            <input {...register("password")} type="password" placeholder="Senha"/>
                            <p>{errors.password?.message}</p>
                        </InputModal>

                        <InputModal>
                            <input {...register("confirmPassword")} type="password" placeholder="Confirmar Senha "/>
                            <p>{errors.confirmPassword?.message}</p>
                        </InputModal>
                    </Row>
                </Wrapper>
                <Button type="submit">Cadastrar</Button>
                </SignUpForm>

                
                <Footer>
                    <p>Já possui uma conta? <a href="/login">Entre</a></p>
                </Footer>
            </ModalDiv>
        </Container>
    );
}

export default Modal;