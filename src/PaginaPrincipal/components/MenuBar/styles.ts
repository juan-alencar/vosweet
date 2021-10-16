import styled, { css } from "styled-components";

import {     
    Home,
    Notifications,
    ExitToApp,
    Person,
    Twitter} from '../../../styles/Icons'

export const Container = styled.div`
    display: none;

    @media (min-width: 500px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--white);

        margin: 20px 0 0 20px;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;
        border-radius: 20px;

        max-height: 90vh;
    }
`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px){
        align-items: flex-start;
    }
`; 

export const Logo = styled(Twitter)`
    width: 41px;
    height: 41px;
    margin-bottom: 20px;
    
    > path{
        fill: var(--purple);
    }
`; 

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 8.25px 0;
    outline: 0;
    cursor: pointer;
    border-radius: 25px;

    > span {
        display: none;
    }

    @media (min-width: 1280px){
        padding-right: 15px;

        >span{
            color: var(--gray);
            display: inline;
            margin-left: 19px;

            font-weight: bold;
            font-size: 19px;
        }
    }

    & + button {
        margin-top: 16.5px;
    }

    & + button:last-child{
        margin-top: 33px;
        width: 40px;
        height: 40px;
        
        >span {
            display: none;
        }
        
        @media (min-width: 1280px){
            width: 100%;
            height: unset;
            
            >span{
                color: var(--white);
                display: inline;
            }
        }
    }

    &:hover, &.active{
        span, svg{
            color: var(--purple);
            fill: var(--purple);
        }
    }
`; 

const iconCSS = css`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    fill: var(--gray);
`;

export const HomeIcon = styled(Home)`${iconCSS}`;
export const BellIcon = styled(Notifications)`${iconCSS}`;
export const ProfileIcon = styled(Person)`${iconCSS}`;

export const ExitIcon = styled(ExitToApp)`
    display: none;

    @media (min-width: 1280px){
        display: inline-block;
        width: 25px;
        height: 25px;
        color: var(--white);
        margin-left: 30px;
        cursor: pointer;

        &:hover{
            >path{
                color: var(--purple);
            }
        }
    }
`; 

export const Botside = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 39px;
    height: 39px;

    flex-shrink: 0;

    border-radius: 50%;
    background: var(--gray);
`;

export const ProfileData = styled.div`
    display: none;

    @media (min-width: 1280px){
        display: flex;
        flex-direction: column;

        margin-left: 10px;
        font-size: 14px;

        > span {
            color: var(--gray);
        }
    }
`;
