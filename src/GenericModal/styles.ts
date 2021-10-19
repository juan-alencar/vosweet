import styled from 'styled-components';

import { Close } from '../styles/Icons';

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

  position: relative;
  align-items: center;

  border-radius: 20px;
  background: var(--primary);
`;

export const CLoseIcon = styled(Close)`
  display: flex;
  position: absolute;
  top: 15px;
  right: 15px;
  max-width: 20px;
  cursor: pointer;
  fill: var(--gray);
`;

export const Title = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const ModalContent = styled.div`
    display: flex;

`;
