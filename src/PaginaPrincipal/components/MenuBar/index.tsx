import React, { useState } from 'react';
import Button from '../Button';

import Modal from '../../../Modal';
import GenericModal from '../../../GenericModal'

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <>
      <GenericModal 
      title={'This is my modal'} 
      onClose={toggleModal} 
      isOpen={isModalOpen}>
        this is a son
      </GenericModal>
      <Container>
        <TopSide>
          <Logo />

          <MenuButton>
            <HomeIcon />
            <span>Página Inicial</span>
          </MenuButton>

          <MenuButton onClick={toggleModal}>
            <ProfileIcon />
            <span>Perfil</span>
          </MenuButton>

          <Button>
            <span>Postar</span>
          </Button>
        </TopSide>

        <Botside>
          <Avatar src="https://i.ibb.co/fSMPFvy/juan.png" />

          <ProfileData>
            <strong>Juan Alencar</strong>
            <span>@juandmalencar</span>
          </ProfileData>

          <ExitIcon />
        </Botside>
      </Container>
    </>
  );
};

export default MenuBar;
