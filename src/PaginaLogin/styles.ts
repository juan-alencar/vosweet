import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const SideImage = styled.div`
    background: var(--purple);
    height: 100vh;
    width: 50%;
`;
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    background: var(--white);
    `;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    
    > p {
        color: var(--yellow);
        font-size: 50px;
        font-weight: bold;
    }
    
    > span {
        font-size: 25px;
    }
    `;

export const Logo = styled.div`
    background-color: var(--purple);
    height: 100px;
    width: 100px;
    margin-bottom: 2vh;
    border-radius: 50%;
    flex-shrink: 0;
`;


export const LoginBox = styled.div`
    width: min(450px, 28vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    padding: 0px 32px;
    border-radius: 20px;

    > p {
        font-size: 18px;
        margin: 30px 0;
    }
    
    > span {
        font-size: 14px;
        margin-bottom: 30px;
    }
`;
export const Inputs = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: none;
    width: 100%;

    > input {
        padding: 12px 16px;
        background-color: var(--white);
        border-radius: 20px;
        width: 100%;
        
        &::placeholder{
            color: var(--gray);
            
        }
        
        &:focus{
            outline: none;
        }
    }
    
    > p {
        color: var(--gray);
        font-size: 14px;
        margin-top: 4px;
        margin-bottom: 16px;
        margin-left: 16px;
        align-self: flex-start;
    }
    
    `;
export const Line = styled.div`
    margin: 24px 0;
    height: 1px;
    width: 100%;
    background: var(--gray);
    opacity: 0.5;
`;

export const Button = styled.button`
    background: var(--purple);
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    padding: 8px 0;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        background: var(--light-hover);
    }
`;
