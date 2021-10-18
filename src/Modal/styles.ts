import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    z-index: 99;
`;

export const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    width: min(450px, max(280px, 80vw));
    height: auto;    
    padding: 32px 16px;

    align-items: center;
    
    border-radius: 20px;
    background: var(--primary);
`;


export const Title = styled.div`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    margin: 0 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    
    
    @media (min-width: 500px){
        margin-bottom: 8px;
        flex-direction: row;
    }

    
`;
export const InputModal = styled.div`
    width: 100%;
    margin-bottom: 8px;
    
    @media (min-width: 500px){
        margin: 0 8px;
        
        &.endereco {
            width: 190%;
        }
    }
    
    > input{
        background-color: var(--white);
        border-radius: 20px;
        padding: 12px;
        width: 100%;
        outline: none;

        &::placeholder{
            color: var(--gray);
            font-size: 14px;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }

    }

    > p {
        color: var(--gray);
        font-size: 12px;
        margin-top: 2px;
        margin-left: 10px;
        margin-bottom: 4px;
    }
`;

export const Button = styled.button`
    background: var(--purple);
    border-radius: 20px;

    font-size: 16px;
    color: var(--white);
    font-weight: bold;

    padding: 12px 80px;
    margin: 12px 0;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
        background: var(--light-hover);
    }
`;

export const Footer = styled.div`
    font-size: 14px;

    > p{
        > a {
        color: var(--purple);
        }
    }
`;