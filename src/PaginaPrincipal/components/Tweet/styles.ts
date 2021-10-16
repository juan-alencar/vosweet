import styled from "styled-components";

import { Comment } from "../../../styles/Icons"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 16px; 
    max-width: 100%;
    background-color: var(--white);
    margin-bottom: 16px;
    border-radius: 20px;
`;

export const Body = styled.div`
    display: flex;
    margin-top: 3px;
    position: relative;
`;

export const Avatar = styled.img`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);

    position: absolute;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2px;
    margin-left: 60px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    white-space: nowrap; //faz com que o texto nao quebre a linha

    > strong{
        color: var(--purple);
        margin-right: 5px;
    }
    > span, time{
        color: var(--gray)
    }
    > span, strong {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Dot = styled.div`
    background: var(--gray);
    height: 3px;
    width: 3px;
    border-radius: 50%;
    margin: 0 10px;
`;

export const Description = styled.p`
    color: var(--secondary);
    font-size: 14px;
    margin-top: 4px;
`;

export const Icons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%; /** Mobile */
    margin-top: 8px;
`;

export const Status = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--white);
    padding: 2px 8px;
    border-radius: 20px;
    cursor: pointer;
    background-color: var(--purple);
    
    &:hover{
        background-color: var(--light-hover);
        
    }
`;

export const CommentIcon = styled(Comment)`
    width: 25px;
    height: 25px;
    margin-right: 2px;
    fill: var(--white);
`;
