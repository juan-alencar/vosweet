import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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

interface IFormInputs {
  email: string
  password: string
}

const lowercaseRegex =  /(?=.*[a-z])/;
const uppercaseRegex =  /(?=.*[A-Z])/;
const numericRegex =  /(?=.*[0-9])/;  

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string()
    .matches(uppercaseRegex, 'Bota uma letra maiúscula aí!')
    .matches(lowercaseRegex, 'Agora uma minúscula, pra nóis')
    .matches(numericRegex, 'Um numerozinho pra agradar')    
    .min(8, 'Completa os 8 caracteres pra deixar perfeito')
    .required('Senha é obrigatória'),
}).required();

const PaginaLogin: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        
        <Container>
            <SideImage/>
                <LoginContainer>
                <Title>
                    <Logo />
                    <p>Vosweet</p>
                    <span>Uma mensagem em um click.</span>
                </Title>

                <LoginBox >
                    <p>Faça o login na sua conta!</p>
                    
                    <Inputs onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email")} 
                        placeholder="Email"/>
                        <p>{errors.email?.message}</p>
                            
                        <input {...register("password")} 
                        placeholder="Senha"
                        type="password"/>
                        <p>{errors.password?.message}</p>

                        <Button type="submit">Entrar</Button>
                    </Inputs>

                    <Line />

                    <span>Não tem uma conta? <a href="/">Cadastre-se</a></span>
                </LoginBox>
            </LoginContainer>
        </Container>
    );
}

export default PaginaLogin;