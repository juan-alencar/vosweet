import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    padding: 25px 20px;
    border-radius: 20px;
    margin: 16px 0;

    > button {
        margin-top: 10px;
        padding: 10px 15px;
        font-weight: bold;
        
        display: flex;
        align-self: flex-end;
    }
`;

export const TweetArea = styled.textarea`
    font-size: 18px;
    outline: none;
    resize: none;
    overflow: hidden;
`;
