import React, { useState } from 'react';
import Button from '../Button';

import GenericModal from '../../../GenericModal'
import FormDataChanges from '../../../FormDataChanges';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
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
      title={'Alteração de Dados'} 
      onClose={toggleModal} 
      isOpen={isModalOpen}>
        <FormDataChanges />
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
