import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    position: relative;

`;

export const SideImage = styled.div`

    display: none;

    @media (min-width: 1000px){
        display: flex;
        background: var(--purple);
        height: auto;
        width: 50%;
    }
`;
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--white);
    width: 100%;

    @media (min-width: 1000px){
        width: 50%;
    }
    `;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    
    > p {
        color: var(--purple);
        font-size: 3em;
        font-weight: bold;
    }
`;

export const Logo = styled.div`
    background: var(--purple);
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
    flex-shrink: 0;
    border-radius: 50%;
`;

export const LoginBox = styled.div`
    width: min(450px, max(280px, 80vw));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    padding: 0px 32px;
    border-radius: 20px;

    > p {
        font-size: 18px;
        margin: 20px 0;
    }
    
    > span {
        font-size: 14px;
        margin-bottom: 20px;
       
        > button {
            text-decoration: underline;
            color: var(--purple);
            cursor: pointer;

            &:hover{
                color: var(--light-hover);
            }

        }
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
    margin: 20px 0;
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
